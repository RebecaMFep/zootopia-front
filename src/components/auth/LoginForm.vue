<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'



const username = ref('')
const password = ref('')

const route = useRoute()
const router = useRouter()

const store = useAuthStore()

function login() {

  if (username.value == store.user.username && password.value == store.user.password) {
      store.user.isAuthenticated = true;
      const redirectPath = route.query.redirect || '/about'
      router.push(redirectPath)

    } else {
      showAlert.value = true;
    }

}

</script>
 
<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">EMAIL</label>
      <input type="text" name="username" id="username" v-model="username">

      <label for="password">PASSWORD</label>
      <input type="password" name="password" id="password" v-model="password"> 
  
      <button type="submit">SIGN IN</button>

      <p>DONT HAVE AN ACCOUNT?</p>
      
      <div v-if="showAlert" class="alert alert-danger mt-3" role="alert">
         Invalid email or password. Please try again.
      </div>
    </form>
  </div>
  
</template>

<style lang="scss" scoped>




 * {
background-image: url("../../assets/photos/fondo_login.jpeg");
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
}
</style>
