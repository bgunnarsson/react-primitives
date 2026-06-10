# Using `@bgunnarsson/react-primitives` in Figma Make

How to make this library consumable by a Figma Make project (Figma's AI code-gen tool that emits React + Tailwind).

## Why this doc exists

Two things make a custom library actually usable in Make:

1. **It must be installable** — Make runs `pnpm add` like any other project, so the package needs to be on npm at a version that contains your latest code.
2. **Figma Make needs to know it exists and how to use it** — either via a context doc you paste into the project, or via Figma Code Connect, which links the Figma components in your design library to the React components in this repo. Code Connect mappings are surfaced to Make when it generates code from a frame that uses those components.

Today the package is on npm but every `*.figma.tsx` mapping still has the `'FIGMA_COMPONENT_URL'` stub, so Code Connect publishes nothing useful. The steps below fix both.

## Prerequisites

- **Figma library file URL** — the Figma file that hosts your component library (the components Figma Make will pick up). Code Connect needs a node URL per component; without a Figma library, Code Connect is moot and you'd stop after step 1.
- **`FIGMA_ACCESS_TOKEN`** — a Figma personal access token with at least File Content read scope. The Code Connect CLI reads it from env.
- **npm login** as the `@bgunnarsson` owner (verify with `npm whoami`).

## Step 1 — Republish to npm so Figma Make installs the latest code

The current `0.1.14` build in `dist/` is dated Apr 27. Confirm what's on the registry, then bump and publish.

1. `npm view @bgunnarsson/react-primitives version` — compare to local `package.json`.
2. If divergent or unsure, bump: edit `package.json` `version` (patch bump). No CHANGELOG exists in this repo; don't invent one.
3. `npx tsc --noEmit` — typecheck must pass.
4. `NODE_OPTIONS="--max-old-space-size=8192" pnpm build` — required heap; the default OOMs mid-DTS per `CLAUDE.md`.
5. `pnpm publish --access public` — `publishConfig.access` is already `public` and `files: ["dist"]` keeps the tarball lean.
6. Smoke test from a scratch dir: `pnpm add @bgunnarsson/react-primitives` and import `Button` to confirm types resolve.

Files touched: `package.json` (version field only).

## Step 2 — Wire up Figma Code Connect URLs

There are 97 `src/components/*/*.figma.tsx` files, each containing the literal `'FIGMA_COMPONENT_URL'`. Hand-editing 97 files is error-prone; drive it from a manifest.

1. **Build a manifest** `figma-mapping.json` at repo root:
   ```json
   { "Button": "https://www.figma.com/design/<FILE_KEY>/<NAME>?node-id=<NODE_ID>", ... }
   ```
   Populate it by walking your Figma library file (Figma sidebar → component → "Copy link to selection"). Component names must match the directory names under `src/components/`.

2. **Patch script** — a one-shot Node script (e.g. `scripts/apply-figma-urls.mjs`) that:
   - Reads `figma-mapping.json`.
   - For each entry, opens `src/components/<Name>/<Name>.figma.tsx` and replaces the single occurrence of `'FIGMA_COMPONENT_URL'` with the real URL.
   - Logs any component in the manifest that has no matching file, and any `.figma.tsx` still containing the placeholder after the run.

   Idempotent — safe to re-run as you fill in more mappings.

3. **Validate prop mappings** — after URLs are in, open 3–5 representative `.figma.tsx` files (e.g. `Button`, `Dialog`, `Input`, `PhoneInput` for a multi-part case) and confirm the `props` block reflects the real Figma component props. The current scaffolds were generated against a placeholder URL, so prop names may not match the live Figma component. Fix divergences manually — no shortcut.

4. **Publish Code Connect**: `FIGMA_ACCESS_TOKEN=… pnpm figma:publish`. The script is already wired in `package.json`. Re-publish whenever you change a mapping.

Files touched: all 97 `src/components/*/*.figma.tsx` (URL string only, unless you also fix prop drift), plus the new `figma-mapping.json` and `scripts/apply-figma-urls.mjs`.

## Step 3 — Give Figma Make a context doc

Make's AI doesn't auto-discover your library's API even when it's installed. Paste a short context block into the Figma Make project's instructions:

- Package name and install line (`pnpm add @bgunnarsson/react-primitives`).
- Import style — prefer the per-component subpath (`@bgunnarsson/react-primitives/components/Button`) for tree-shaking; top-level barrel works too.
- Styling rule — **className only**, no `style` prop on components; Tailwind expected on the consumer side.
- Compound-component shape — e.g. `Dialog` is `DialogTrigger` + `DialogContent` + …; no monolithic wrapper.
- Polymorphism — `Box` and `Text` accept `as`.
- Controlled/uncontrolled convention — `value` + `onValueChange` + `defaultValue`, distinguish with `valueProp !== undefined`.

The existing `README.md` already covers most of this. Easiest path: paste the README's "Quick start" + the components table into Figma Make's project instructions.

## Verification

- `npm view @bgunnarsson/react-primitives version` returns the version you just published.
- In a fresh dir: `pnpm init -y && pnpm add @bgunnarsson/react-primitives react react-dom && node -e "console.log(Object.keys(require('@bgunnarsson/react-primitives')).length)"` — non-zero export count.
- `grep -rl "FIGMA_COMPONENT_URL" src/components` returns nothing (or only the components you've intentionally deferred).
- `pnpm figma:publish` exits 0 and reports the expected number of mappings created/updated.
- In a Figma Make project: install the package, prompt Make to "build a login form using @bgunnarsson/react-primitives", confirm the output imports from the package and uses real component names (Button, Input, Label).

## Out of scope

- Release CI/CD. No `.github/workflows` exists; manual `pnpm publish` matches the current workflow.
- Renaming components, adding new ones, or changing the API surface to "fit" Figma. Code Connect maps existing components to Figma; don't reshape the library for it.
