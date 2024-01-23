<script setup>

import { RouterLink, RouterView } from 'vue-router'
import FooterComp from './components/FooterComp.vue';
import LoginForm from './components/auth/LoginForm.vue';
import HomeView from './views/HomeView.vue';

</script>

<template>
      <nav>

        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/Home">Home</RouterLink>
      
      </nav>
      <main>
        <RouterView />
        <FooterComp />
      </main>
    

    
 

</template>

<style lang="scss" scoped>
  
</style>
