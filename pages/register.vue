<template>
  <v-main class="register-bg">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="8" class="register-card">
            <v-card-title class="text-h6 text-center">
              Register
            </v-card-title>

            <v-card-text>
              <v-text-field
                v-model="username"
                label="Username"
                variant="outlined"
                density="comfortable"
              />
              <v-text-field
                v-model="password"
                type="password"
                label="Password"
                variant="outlined"
                density="comfortable"
              />
            </v-card-text>

            <v-card-actions class="flex-column">
              <v-btn block color="primary" @click="register">
                Register
              </v-btn>

              <v-btn
                variant="text"
                class="mt-2"
                @click="navigateTo('/')"
              >
                กลับไปหน้า Login
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

const username = ref('')
const password = ref('')

const register = async () => {
  if (!username.value || !password.value) {
    Swal.fire('แจ้งเตือน', 'กรุณากรอกข้อมูล', 'warning')
    return
  }

  try {
    const res = await fetch(`${config.public.apiBase}/register.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })

    const data = await res.json()

    if (data.status === 'success') {
      Swal.fire('สำเร็จ', data.message, 'success')
      navigateTo('/')
    } else {
      Swal.fire('ผิดพลาด', data.message, 'error')
    }
  } catch {
    Swal.fire('Error', 'เรียก PHP ไม่ได้', 'error')
  }
}
</script>

<style scoped>
/* 🔥 พื้นหลังเต็มจอ */
.register-bg {
  min-height: 100vh;
  background: url('/images/bg2register.jpg') no-repeat center center;
  background-size: cover;
}

/* 💎 การ์ดแบบ Glass */
.register-card {
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  color: white;
}
</style>
