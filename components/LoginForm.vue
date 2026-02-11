<template>
  <v-card>
    <v-card-title class="text-h6">Login</v-card-title>

    <v-card-text>
      <v-text-field
        v-model="userName"
        label="Username"
      />
      <v-text-field
        v-model="userPass"
        type="password"
        label="Password"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn block color="primary" @click="login">
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const config = useRuntimeConfig()
const router = useRouter()

const userName = ref('')
const userPass = ref('')

const login = async () => {
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

      if (process.client) {
        // 🔥 อ่าน role ให้ถูกต้องจาก backend
        localStorage.setItem('role', data.user.role)
        localStorage.setItem('userId', data.user.id)
      }

      await Swal.fire('สำเร็จ', data.message, 'success')
      router.push('/home')

    } else {
      Swal.fire('ผิดพลาด', data.message, 'error')
    }

  } catch (err) {
    Swal.fire('Error', 'เชื่อมต่อ PHP ไม่ได้', 'error')
  }
}
</script>
