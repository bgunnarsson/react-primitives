import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const componentsDir = join(root, 'src/components')
const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
const indexSource = readFileSync(join(root, 'src/index.ts'), 'utf8')
const readme = readFileSync(join(root, 'README.md'), 'utf8')

const components = readdirSync(componentsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((name) => existsSync(join(componentsDir, name, 'index.ts')))
  .sort((a, b) => a.localeCompare(b))

const exportKeys = Object.keys(packageJson.exports ?? {})

const missingFromPackageExports = components.filter((name) => !exportKeys.includes(`./components/${name}`))
const missingFromIndex = components.filter((name) => !indexSource.includes(`'./components/${name}'`))
const missingFromReadme = components.filter((name) => !readme.includes(`src/components/${name}/README.md`))

const extraPackageExports = exportKeys
  .filter((key) => key.startsWith('./components/'))
  .map((key) => key.replace('./components/', ''))
  .filter((name) => !components.includes(name))
  .sort((a, b) => a.localeCompare(b))

const failures = [
  ['Missing package.json exports', missingFromPackageExports],
  ['Missing src/index.ts exports', missingFromIndex],
  ['Missing README component links', missingFromReadme],
  ['Package exports without component directory', extraPackageExports],
].filter(([, items]) => items.length > 0)

if (failures.length > 0) {
  for (const [label, items] of failures) {
    console.error(`${label}:`)
    for (const item of items) {
      console.error(`  - ${item}`)
    }
  }
  process.exit(1)
}

console.log(`Component metadata is in sync for ${components.length} components.`)
