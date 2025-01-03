<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app>
    <v-app-bar name="app-bar" app>
      <v-app-bar-title>Demo App</v-app-bar-title>

      <!-- Teleport zone "slon-menu-toolbar" -->
      <div id="slon-menu-toolbar"></div>
      
      <template v-slot:append>
        <v-btn-icon class="mr-2" icon="mdi-theme-light-dark" flat @click="toggleTheme" />
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>