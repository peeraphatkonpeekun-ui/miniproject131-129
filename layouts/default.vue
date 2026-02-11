<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>My System</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item @click="navigateTo('/home')">
          <v-list-item-title>หน้าทั่วไป</v-list-item-title>
        </v-list-item>

        <v-list-item @click="navigateTo('/developer')">
          <v-list-item-title>หน้าผู้พัฒนา</v-list-item-title>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const drawer = ref(false)
const router = useRouter()

const navigateTo = (path) => {
  router.push(path)
  drawer.value = false
}

const logout = () => {
  if (process.client) {
    localStorage.clear()
  }
  router.push('/')
}
</script>
