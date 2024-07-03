<script setup>
import { ref } from 'vue'
const toggle = ref(true)
</script>

<template>
  <v-container class="d-flex" fluid>
    <v-card class="mx-4" width="400">
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
  </v-container>
</template>

<style lang="scss"></style>
