<template>
  <v-main class="login-bg">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="8" class="login-card">
            <v-card-title class="text-h6 text-center">
              Login
            </v-card-title>

            <v-card-text>
              <v-text-field v-model="userName" label="Username" variant="outlined" />
              <v-text-field v-model="userPass" type="password" label="Password" variant="outlined" />
            </v-card-text>

            <v-card-actions class="flex-column">
              <v-btn block color="primary" :loading="loading" @click="login">
                Login
              </v-btn>

              <v-btn variant="text" class="mt-2" @click="navigateTo('/register')">
                สมัครสมาชิก
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

const config = useRuntimeConfig()

const userName = ref('')
const userPass = ref('')
const loading = ref(false)

const login = async () => {
  if (!userName.value || !userPass.value) {
    Swal.fire('แจ้งเตือน', 'กรุณากรอกข้อมูล', 'warning')
    return
  }

  loading.value = true

  try {
    const res = await fetch(`${config.public.apiBase}/login.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName: userName.value,
        userPass: userPass.value
      })
    })

    const data = await res.json()

    if (data.status === 'success') {
      localStorage.setItem('login', 'true')
      localStorage.setItem('role', data.user.role)
      Swal.fire('สำเร็จ', data.message, 'success')
      navigateTo('/home')
    } else {
      Swal.fire('ผิดพลาด', data.message, 'error')
    }
  } catch {
    Swal.fire('Error', 'เรียก PHP ไม่ได้', 'error')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-bg {
  min-height: 100vh;
  background-size: cover;
}

.login-card {
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  color: white;
}
</style>
