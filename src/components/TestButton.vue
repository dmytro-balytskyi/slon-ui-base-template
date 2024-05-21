<script setup>
defineProps({
  label: {
    type: String,
    default: 'Button'
  }
})
</script>

<template>
  <v-btn v-bind="$props">
    {{ label }}
  </v-btn>
</template>
