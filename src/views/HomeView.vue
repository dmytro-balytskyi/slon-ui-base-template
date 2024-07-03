<script setup>
import TestButton from '@/components/TestButton.vue'
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const toggle = ref(true)
</script>

<template>
  <div class="h-screen d-flex flex-column justify-center align-center">
    <v-app-bar>
      <v-app-bar-title>Demo App</v-app-bar-title>
      <template v-slot:append>
        <v-btn-icon class="mr-2" icon="mdi-theme-light-dark" flat @click="toggleTheme" />
      </template>
    </v-app-bar>
    <h1>Home Page</h1>

    <TestButton color="primary">Button</TestButton>

    <v-card class="mt-6" width="400">
      <v-card-title class="ma-0 pa-0">
        <v-list-item>
          <template #prepend>
            <v-icon>mdi-phone</v-icon>
          </template>
          <span class="text-uppercase">Телефонія</span>
          <template #append>
            <v-btn-icon icon="mdi-cog" flat @click.stop="toggle = !toggle" />
          </template>
        </v-list-item>
        <v-divider />
      </v-card-title>
      <template v-if="toggle">
        <v-card-text class="pt-4">
          <v-file-input label="File input"></v-file-input>
          <v-select label="Select"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
          <v-autocomplete color="primary" label="Autocomplete"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-autocomplete>
          <v-combobox label="Combobox"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-combobox>
          <v-text-field label="TextField" clearable></v-text-field>
          <v-textarea label="Textarea"></v-textarea>

          <v-chip closable>
            Chip
          </v-chip>
          <v-chip closable>
            Chip
          </v-chip>
          <v-chip closable>
            And
          </v-chip>
          <v-chip closable>
            Dale
          </v-chip>

          <v-chip>
            Chip
          </v-chip>
          <v-chip>
            Chip
          </v-chip>
          <v-chip>
            And
          </v-chip>
          <v-chip>
            Dale
          </v-chip>

          <v-chip>
            Chip
          </v-chip>
          <v-chip>
            Chip
          </v-chip>
          <v-chip>
            And
          </v-chip>
          <v-chip>
            Dale
          </v-chip>

          <v-chip>
            Chip
          </v-chip>
          <v-chip>
            Chip
          </v-chip>
          <v-chip>
            And
          </v-chip>
          <v-chip>
            Dale
          </v-chip>
        </v-card-text>
      </template>
    </v-card>
  </div>
</template>

<style lang="scss"></style>
