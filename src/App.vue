<script setup>
import { useTheme } from 'vuetify'
import SlonLogo from './components/SlonLogo.vue'

const theme = useTheme()
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app>
    <v-app-bar name="app-bar" app>
      <template #prepend>
        <slon-logo />
      </template>

      <!-- Teleport zone "slon-menu-toolbar" -->
      <div id="slon-menu-toolbar"></div>

      <template #append>
        <v-avatar class="mx-4" color="grey-darken-1" size="32" @click="toggleTheme">
          <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
        </v-avatar>
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>