<script setup>
import { ref, useSlots } from 'vue'

const slots = useSlots()
</script>

<template>
  <v-tooltip :text="slots?.default">
    <template v-slot:activator="{ props: tooltipProps }">
      <v-chip v-bind="tooltipProps">
        <slot />
        <div v-if="slots?.default">ok</div>      
      </v-chip>
    </template>
  </v-tooltip>

  
</template>

<style lang="scss" scoped></style>
