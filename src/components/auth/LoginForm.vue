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
      const redirectPath = route.query.redirect || '/Home'
      router.push(redirectPath)

    } else {
      showAlert.value = true;
    }

}

</script>
 
<template>
  <body>
    <form class="form" name="form" @submit.prevent="login"> 
      
      <div class="imgForm">
        <img src="../../assets/photos/login.jpeg" class="imgLogin">
      </div>

      
      <div class="contenedor">

        <div class="circle">
          <div class="circulo">LOG IN</div>
        </div>

        <label for="username">EMAIL</label> 
        <input type="text" name="username" id="username" v-model="username">
    
        <label for="password">PASSWORD</label>
        <input type="password" name="password" id="password" v-model="password"> 

        <button type="submit">SIGN IN</button>

      </div>
    </form>
    
</body>

</template>


<style lang="scss" scoped>

 body{
  background-image: url("../../assets/photos/bg_login.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.8);
  height: 100vh;
  font-family: Arial, sans-serif;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  }

  .contenedor{
    margin: 5%;
    display: column;
    align-items: center;
    justify-content: center;
  }

  form {
    width: 500px; 
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

    label {
      display: block;
      margin-bottom: 8px;
      color: gray;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
    }

    button {
      background-color: #386F5B;
      color: #fff;
      padding: 15px 20px;
      margin-top: 2%;
      border: none;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 100%;
  
    }

    .circle{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .circulo {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #386F5B;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    button:hover {
      background-color: green;
    }

    .imgLogin{
      padding: 0;
      width: 100%;
    }


</style>
