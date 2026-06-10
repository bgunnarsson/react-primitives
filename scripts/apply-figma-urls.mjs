#!/usr/bin/env node
// Reads figma-mapping.json (output of @bgunnarsson/figma-components-generator)
// and replaces the placeholder URL in src/components/<Name>/<Name>.figma.tsx.
//
// Usage: node scripts/apply-figma-urls.mjs [path/to/figma-mapping.json]
//        defaults to ./figma-mapping.json
//
// Idempotent. Patches only the URL — prop block rewrites stay manual because
// existing scaffolds have varied shapes (some import multiple parts, some
// declare props the manifest doesn't model). Per FIGMA.md, divergences are a
// manual fix.

import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, join } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const STUB = "'FIGMA_COMPONENT_URL'";

const mappingPath = resolve(process.argv[2] ?? "figma-mapping.json");
if (!existsSync(mappingPath)) {
  console.error(`figma-mapping.json not found at ${mappingPath}`);
  process.exit(1);
}

/** @type {Record<string, string>} */
const mapping = JSON.parse(await readFile(mappingPath, "utf8"));

const summary = {
  patched: /** @type {string[]} */ ([]),
  alreadyPatched: /** @type {string[]} */ ([]),
  noFile: /** @type {string[]} */ ([]),
  noTarget: /** @type {string[]} */ ([]),
};

// Matches `figma.connect(<expr>, '<url>'` — captures the bit before the URL so we
// can substitute. Targets only the URL passed to figma.connect, never anything in
// surrounding comments.
const URL_RE = /(figma\.connect\(\s*[A-Za-z_$][\w$.]*\s*,\s*)'[^']*'/;

// The auto-generated stub leaves two instructional comment lines. Drop them on
// first patch — they refer to a placeholder that no longer exists.
const STALE_COMMENT_RE = /^\/\/ Replace 'FIGMA_COMPONENT_URL'.*\r?\n\/\/ after running: figma connect create.*\r?\n/m;

for (const [name, url] of Object.entries(mapping)) {
  const filePath = join(ROOT, "src", "components", name, `${name}.figma.tsx`);
  if (!existsSync(filePath)) {
    summary.noFile.push(name);
    continue;
  }
  const original = await readFile(filePath, "utf8");
  let next = original.replace(STALE_COMMENT_RE, "");

  if (!URL_RE.test(next)) {
    summary.noTarget.push(name);
    continue;
  }

  const match = next.match(URL_RE);
  if (match && match[0].endsWith(`'${url}'`)) {
    if (next === original) {
      summary.alreadyPatched.push(name);
      continue;
    }
    // Comment was stripped but URL was already correct — still write to flush the cleanup.
  }

  next = next.replace(URL_RE, `$1'${url}'`);

  if (next === original) {
    summary.alreadyPatched.push(name);
    continue;
  }
  await writeFile(filePath, next, "utf8");
  summary.patched.push(name);
}

// Surface any leftover stubs across the whole tree
const leftoverStubs = await findLeftoverStubs(join(ROOT, "src/components"));

console.log("");
console.log(`figma-mapping.json:        ${mappingPath}`);
console.log(`patched:                   ${summary.patched.length}`);
console.log(`already patched:           ${summary.alreadyPatched.length}`);
console.log(`mapping entries w/o file:  ${summary.noFile.length}`);
console.log(`no figma.connect target:   ${summary.noTarget.length}`);
console.log(`stubs remaining in tree:   ${leftoverStubs.length}`);

if (summary.patched.length > 0) {
  console.log("");
  console.log("patched:");
  for (const n of summary.patched) console.log(`  ${n}`);
}
if (summary.noFile.length > 0) {
  console.log("");
  console.log("mapping entries without a matching .figma.tsx (typo? component renamed?):");
  for (const n of summary.noFile) console.log(`  ${n}`);
}
if (summary.noTarget.length > 0) {
  console.log("");
  console.log("files where no figma.connect(...) call was found (manual fix):");
  for (const n of summary.noTarget) console.log(`  ${n}`);
}
if (leftoverStubs.length > 0) {
  console.log("");
  console.log("components still containing 'FIGMA_COMPONENT_URL' (not yet generated):");
  for (const n of leftoverStubs) console.log(`  ${n}`);
}

async function findLeftoverStubs(componentsDir) {
  const { readdir } = await import("node:fs/promises");
  const entries = await readdir(componentsDir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const file = join(componentsDir, e.name, `${e.name}.figma.tsx`);
    if (!existsSync(file)) continue;
    const content = await readFile(file, "utf8");
    if (content.includes(STUB)) out.push(e.name);
  }
  return out;
}
