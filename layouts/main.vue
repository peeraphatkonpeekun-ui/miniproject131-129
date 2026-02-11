<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>Mini Project</v-app-bar-title>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>

        <v-list-item to="/developer">
          <v-list-item-title>ผู้พัฒนา</v-list-item-title>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-title>เกี่ยวกับ</v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list-item @click="logout">
          <v-list-item-title class="text-red">
            ออกจากระบบ
          </v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <!-- Page -->
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const logout = () => {
  localStorage.removeItem('login')
  navigateTo('/')
}
</script>
