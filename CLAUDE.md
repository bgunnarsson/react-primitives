# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Task | Command |
|---|---|
| Typecheck | `npx tsc --noEmit` |
| Build library (ESM + CJS + types) | `NODE_OPTIONS="--max-old-space-size=8192" pnpm build` |
| Storybook dev | `pnpm dev` (http://localhost:6006) |
| Build static Storybook | `pnpm build-storybook` |
| Figma Code Connect | `pnpm figma:create` / `pnpm figma:publish` |

There is no test runner. Verification is `tsc --noEmit` plus a Storybook visual check.

The default Node heap is too small for the full `tsup` DTS bundle (~90 entries) — pass `--max-old-space-size=8192` or the build crashes with `ERR_WORKER_OUT_OF_MEMORY` mid-DTS.

## Architecture

**What this is:** an unstyled, headless React component library. Every component ships zero CSS — consumers pass a `className` (Tailwind, CSS Modules, plain CSS, anything) for styling. Most components are thin wrappers around Radix UI primitives; a handful wrap third-party packages (`react-day-picker`, `cmdk`, `embla-carousel-react`, `vaul`, `sonner`, `yet-another-react-lightbox`, `react-resizable-panels`, `input-otp`); a few are vanilla.

**Build system:** `tsup.config.ts` auto-derives an entry point per directory under `src/components/*` from its `index.ts`, and a top-level `index` from `src/index.ts`. `splitting: true` lets shared internals dedupe across entries. Output is `dist/<Name>.{js,cjs,d.ts,d.cts}`.

**Three places that must stay in sync when adding/removing a component:**
1. `src/components/<Name>/` — the component itself (auto-discovered by `tsup`)
2. `src/index.ts` — top-level barrel (manual; required for `import { X } from '@bgunnarsson/react-primitives'`)
3. `package.json` `exports` map — per-component subpath (manual; required for `import { X } from '@bgunnarsson/react-primitives/components/X'`)
4. `README.md` — component table + count at the top of the reference section (manual)

If any of those four drift, consumers see broken imports or missing types. The README count and table are kept hand-edited; do not invent automation around them.

**Component shape:** each `src/components/<Name>/` directory contains:
- `<Name>.tsx` — the implementation
- `index.ts` — barrel re-exporting the public surface
- `<Name>.stories.tsx` — Storybook stories (excluded from the published build via `tsconfig.json`)
- `<Name>.figma.tsx` — Figma Code Connect mapper, stub URL `'FIGMA_COMPONENT_URL'` until filled in via `figma:create` (excluded from build)
- `README.md` — per-component docs (props table, usage, Tailwind example, notes)

**Styling-prop convention:** when a component renders multiple visual parts (e.g. `PhoneInput` = wrapper + select + input), expose `<part>ClassName` and `<part>Style` for each. Single-element components forward `className`/`style` natively. Polymorphic components (`Box`, `Text`) use an `as` prop. Compound components (`Dialog`, `Tabs`, etc.) export each named part separately so consumers can target them individually — there is no monolithic component wrapping everything.

**Controlled/uncontrolled pattern:** components that own state (e.g. `PasswordInput`, `SearchInput`, `MaskedInput`, `PhoneInput`) accept `value` + `onValueChange` for controlled use, `defaultValue` for uncontrolled, and use `valueProp !== undefined` to distinguish — not `null`. Match this when writing similar components.

## Storybook quirks

Tailwind is **not** loaded in `.storybook/preview.ts`. Stories must use inline `style` props or scoped `<style>` blocks — Tailwind class names render as no-ops in the Storybook iframe. The README/component examples *do* use Tailwind because they target consumers, who will have their own Tailwind setup.

Existing story files import `React` even when unused (e.g. `import React, { useState }`); TS reports this as a hint, not an error. New stories may keep or drop the import — both are fine.

## File-style notes

- LF line endings only (per global `~/.claude/CLAUDE.md`). Never write CRLF / `^M`.
- Component files are inconsistent in quote style and semicolons — some use `"…";`, others `'…'` no-semi. **Match the file you're editing**; don't reformat unrelated lines.
- The published bundle is `sideEffects: false`, so don't introduce import-time side effects in component modules (e.g. global registrations, CSS imports).
- Lightbox CSS and Toaster placement are documented consumer responsibilities — see README.

## Adding a new component (checklist)

1. Create `src/components/<Name>/{<Name>.tsx,index.ts,<Name>.stories.tsx,<Name>.figma.tsx,README.md}`.
2. Add named exports to `src/index.ts` (component + types, alphabetical not required — match local section).
3. Add a `./components/<Name>` block to `package.json` `exports` (alphabetical within the existing list).
4. Add a row to the appropriate table in `README.md` and bump the count line.
5. `npx tsc --noEmit` and a Storybook smoke check.
