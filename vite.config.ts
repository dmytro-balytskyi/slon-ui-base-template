// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import federation from '@originjs/vite-plugin-federation'
import topLevelAwait from 'vite-plugin-top-level-await'

// Utilities
import { defineConfig, loadEnv, type UserConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '')

  const isVitest = !!process.env.VITEST
  const isStorybook = !!process.env.STORYBOOKBUILD

  const plugins = [
    vue({
      template: { transformAssetUrls }
    }),

    vuetify({
      autoImport: {
        labs: true
      },
      styles: {
        configFile:
          'node_modules/@slonbeton/slon-ui-blueprint-styles/src/styles/settings.scss'
      }
    })
  ]

  if (!isVitest && !isStorybook) {
    plugins.push(
      federation({
        name: 'someshared',
        filename: 're.js',
        remotes: {
          shared: env.VITE_REMOTE_SHARED
        },
        shared: ['vue', 'vuetify', '@vueuse/core']
      })
    )
  }

  if (!isStorybook) {
    plugins.push(
      topLevelAwait({
        promiseExportName: '__tla',
        promiseImportName: (i: number) => `__tla_${i}`
      })
    )
  }

  return {
    plugins,

    define: {
      'process.env': {
        ...process.env,
        ...env
      }
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        },
        sass: {
          api: 'modern-compiler'
        }
      }
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
