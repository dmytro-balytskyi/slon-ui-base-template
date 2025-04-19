// Plugins
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import federation from '@originjs/vite-plugin-federation'
import topLevelAwait from 'vite-plugin-top-level-await'

// Utilities
import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      Vue({
        template: { transformAssetUrls }
      }),
      Vuetify({
        autoImport: {
          labs: true
        },
        styles: {
          configFile: 'node_modules/@slonbeton/slon-ui-blueprint-styles/src/styles/settings.scss'
        }
      }),
      !(process.env.VITEST || process.env.STORYBOOKBUILD) &&
        federation({
          name: 'someshared',
          filename: 're.js',
          remotes: {
            shared: env.VITE_REMOTE_SHARED
          },
          shared: ['vue', 'vuetify', '@vueuse/core']
        }),
      !process.env.STORYBOOKBUILD &&
        topLevelAwait({
          promiseExportName: '__tla',
          promiseImportName: (i) => `__tla_${i}`
        })
    ],
    define: { 'process.env': { ...process.env, ...env } },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
        sass: {
          api: 'modern-compiler',
        }
      },
    },
    build: {
      modulePreload: false,
      minify: false,
      sourcemap: true,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          minifyInternalExports: false
        }
      }
    }
  }
})
