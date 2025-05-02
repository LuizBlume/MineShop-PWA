<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const name = ref('')
const error = ref(null)

const register = async () => {
  try {
    // o Passage já cuidou do registro via widget, então aqui você só sincroniza com o backend
    const token = await window.passage.user.getAuthToken()
    await axios.post('http://localhost:8000/api/usuarios/', {
      email: email.value,
      name: name.value,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (err) {
    error.value = err.response?.data || 'Erro ao registrar'
  }
}
</script>

<template>
  <input v-model="email" placeholder="Email" />
  <input v-model="name" placeholder="Nome" />
  <button @click="register">Cadastrar</button>
  <p v-if="error">{{ error }}</p>
</template>