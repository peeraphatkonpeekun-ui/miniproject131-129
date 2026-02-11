<template>
  <v-container class="pa-8">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="8" class="rounded-xl pa-6">

          <v-card-title class="text-h4 font-weight-bold">
            👋 ยินดีต้อนรับ
          </v-card-title>

          <v-divider class="my-4" />

          <v-card-text class="text-body-1">
            ยินดีต้อนรับเข้าสู่ระบบ Mini Project ของคุณ
            คุณสามารถเลือกเมนูด้านซ้ายเพื่อใช้งานระบบได้
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" @click="goDev">
              ไปหน้าผู้พัฒนา
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const goDev = () => {
  navigateTo('/developer')
}
</script>
