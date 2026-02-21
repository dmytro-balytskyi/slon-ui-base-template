<script setup>
import { useTitle } from '@vueuse/core'
import ErrorBoundary from '@/components/ErrorBoundary.vue'

useTitle('🎯 нова сторінка')
</script>

<template>
  <error-boundary>
    <v-container fluid>
      <p>Заготовка сторінки проекту</p>
      <div class="text-body-2 text-disabled pt-2">
        <p>Клік на аватарі користувача перемикає тему dark/light</p>
      </div>
    </v-container>
  </error-boundary>
</template>

<style lang="scss"></style>
