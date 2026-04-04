import { defineConfig } from 'tsup'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const componentsDir = 'src/components'
const componentEntries = readdirSync(componentsDir)
  .filter((name) => statSync(join(componentsDir, name)).isDirectory())
  .reduce(
    (entries, name) => {
      entries[name] = `${componentsDir}/${name}/index.ts`
      return entries
    },
    {} as Record<string, string>,
  )

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    ...componentEntries,
  },
  format: ['esm', 'cjs'],
  splitting: true,
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
})
