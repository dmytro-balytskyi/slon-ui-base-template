import HomeView from '@/views/HomeView.vue'

export default {
  component: HomeView
}

export const Default = {
  render: (args) => ({
    components: { HomeView },
    setup() {
      return { args }
    },
    template: '<HomeView />'
  }),
  args: {
    title: 'Home page title'
  }
}
