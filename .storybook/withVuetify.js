import { setup } from '@storybook/vue3'
import { defineComponent, ref, watchEffect } from 'vue'
import vuetify from '../src/plugins/vuetify.js'
import { VApp, VMain, VContainer } from 'vuetify/components'

export const withVuetify = (Story, context) => {
  setup((app) => {
    app.use(vuetify)
  })
  
  const theme = ref(context.globals.theme)
  watchEffect(() => {
    vuetify.theme.global.name.value = theme.value
  })

  const WrappedComponent = Story(context)

  return defineComponent({
    components: { WrappedComponent, 'v-app': VApp, 'v-main': VMain, 'v-container': VContainer },
    template: `
        <v-app>
          <v-main>
            <v-container fluid>
              <wrapped-component />
            </v-container>
          </v-main>
        </v-app>
      `
  })
}
