<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav>
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
 

  <RouterView />
</template>
<style ></style>
