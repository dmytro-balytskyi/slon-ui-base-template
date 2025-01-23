<script setup>
import { useTitle } from '@vueuse/core'
import ErrorBoundary from '@/components/ErrorBoundary.vue'

useTitle('Назва проекту')
</script>

<template>
  <error-boundary>
    <v-container fluid>
      <p>Заготовка сторінки проекту</p>
      <div class="text-body-2 text-disabled pt-2">
        <p>Клік на аватарі користувача перемикає тему dark/light</p>
        <p>Не ускладнюй велосипед! Пам'ятай, що в результаті має бути проста shared сторінка</p>
      </div>
    </v-container>
  </error-boundary>
</template>

<style lang="scss"></style>
