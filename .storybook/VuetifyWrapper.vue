<script>
export default {
  props: {
    theme: String,
  },
};
</script>

<template>
  <v-app :theme="theme">
    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>