import { defineConfig } from 'rollup'

import alias from '@rollup/plugin-alias'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

import styles from 'rollup-plugin-styles'

import { name as pkgname } from './package.json'
import os from 'os'
import path from 'path'

const name = pkgname.replace(/(^|-|_)([a-z])/g, function (g, p1, p2) {
  return p2.toUpperCase()
})

function GetBetterDiscordPath() {
  switch (os.platform()) {
    case 'darwin':
      return [process.env.HOME, 'Library/Application Support/BetterDiscord/plugins/']
    case 'win32':
      return [process.env.HOME, 'AppData/Roaming/BetterDiscord/plugins/']
    default:
      throw Error(
        'Platform not implemented, please submit an issue at https://github.com/chazzox/plugin-template/issues or make a pr :)'
      )
  }
}

const meta = `
/**
 * @name EmojiShortcut
 * @author Nathan60107
 * @description Send emoji faster.
 * @version 0.0.1
 */
`.replace(/^\n/, '')

export default defineConfig({
  input: `src/index.ts`,
  output: [
    {
      file: `plugin/${name}.plugin.js`,
      strict: false,
      format: 'cjs',
      banner: meta,
    },
    {
      file: path.join(...GetBetterDiscordPath(), `${name}.plugin.js`),
      strict: false,
      format: 'cjs',
      banner: meta,
    },
  ],
  plugins: [
    // fixing any node_module react import
    alias({
      entries: [
        { find: 'react', replacement: path.resolve(path.resolve(__dirname), 'src/react.ts') },
      ],
    }),

    // resolve imports
    nodeResolve(),
    commonjs(),

    // .scss files to inline BdApi string
    styles({
      extensions: ['.scss'],
      mode: [
        'inject',
        (varname) => {
          return `BdApi.injectCSS("${name}-styles",${varname})`
        },
      ],
    }),

    // jsx transformer
    typescript(),
  ],
})
