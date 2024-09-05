<script setup>
import { ref, mergeProps } from 'vue'
import { useAvailableHeight } from '@/composables/useAvailableHeight'

const { availableHeight } = useAvailableHeight()
const widgetHeight = ref(56)
const isOpened = ref(false)

function openToggle() {
  if (widgetHeight.value == 56) {
    widgetHeight.value = availableHeight.value - 32
    isOpened.value = true
    return
  }

  isOpened.value = false
  widgetHeight.value = 56
}

const isConfigMenuOpen = ref(false)
</script>

<template>
  <v-card
    class="call-history-widget"
    width="320"
    :height="widgetHeight"
    :max-height="availableHeight"
  >
    <v-card-title class="ma-0 pa-0">
      <v-hover v-slot="{ isHovering, props: hoverProps }">
        <v-list-item
          class="text-uppercase"
          v-bind="hoverProps"
          :color="isHovering ? 'primary' : undefined"
          @click="openToggle"
        >
          <template #prepend>
            <v-icon>mdi-phone</v-icon>
          </template>
          Телефонія
          <template #append>
            <v-menu v-model="isConfigMenuOpen" location="end">
              <template v-slot:activator="{ props: menuProps }">
                <v-btn-icon
                  style="background: transparent !important"
                  v-if="isHovering || isConfigMenuOpen"
                  v-bind="menuProps"
                  icon="mdi-cog"
                  flat
                />
              </template>
              <v-list v-if="isHovering || isConfigMenuOpen">
                <v-list-item v-for="index in 10" :key="index" :value="index">
                  <v-list-item-title>Елемент {{ index }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-list-item>
      </v-hover>
    </v-card-title>

    <v-card-text v-if="isOpened">
      {{ availableHeight }}
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped></style>
