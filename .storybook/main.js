const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)'],
  // refs: (config, { configType }) => {
  //   if (configType === 'DEVELOPMENT') {
  //     return {
  //       'calls-history': {
  //         title: 'Проект Calls History',
  //         url: 'http://localhost:6007',
  //         expanded: false
  //       }
  //     }
  //   }

  //   return {
  //     'calls-history': {
  //       title: 'Calls History',
  //       url: 'https://dev.taxi-beton.ua/storybook/calls-history',
  //       expanded: false
  //     }
  //   }
  // },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    'storybook-addon-vue-mdx',
    'storybook-vue-addon',
    '@storybook/addon-mdx-gfm',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta'
    }
  },
  core: {
    disableTelemetry: true
  },
  docs: {}
}

export default config
