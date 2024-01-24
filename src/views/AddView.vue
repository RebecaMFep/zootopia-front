<script setup> 
import Header from '@/components/Home/Header.vue';
import AddComp from '../components/AddComp.vue';
import SpeciesCount from '@/components/home/SpeciesCount.vue';
import FooterComp from '@/components/FooterComp.vue';
</script>

<template>
    <main>
      <Header /> 
      <SpeciesCount />  
      <AddComp />
      <FooterComp />
  
    </main>
  </template>

<style lang="scss" scoped>

</style>