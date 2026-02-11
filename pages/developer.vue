<template>
  <v-container class="pa-8">
    <v-row justify="center">
      <v-col cols="12" md="8">

        <v-card elevation="10" class="rounded-xl pa-6">
          
          <v-card-title class="text-h4 font-weight-bold text-primary">
            🛠 หน้าผู้พัฒนา
          </v-card-title>

          <v-divider class="my-4" />

          <v-card-text>
            <p class="mb-4">
              หน้านี้สำหรับผู้ดูแลระบบ (Admin) เท่านั้น
            </p>

            <v-alert
              type="info"
              variant="tonal"
              border="start"
            >
              คุณสามารถเพิ่มเครื่องมือสำหรับจัดการระบบที่นี่
            </v-alert>

          </v-card-text>

        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
definePageMeta({
  middleware: 'admin'
})
</script>
