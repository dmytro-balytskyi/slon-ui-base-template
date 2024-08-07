/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    //'@storybook/addon-interactions',
    '@storybook/addon-links',
    'storybook-addon-vue-slots'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta'
    }
  },
  core: {
    disableTelemetry: true // 👈 Disables telemetry
  },
  docs: {
    autodocs: 'tag'
  }
}

export default config
