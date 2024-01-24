<script setup> 
import FooterComp from '@/components/FooterComp.vue';
import Header from '@/components/Home/Header.vue';

import SpeciesCount from '@/components/home/SpeciesCount.vue';
import ModifyComp from '@/components/ModifyComp.vue';
</script>

<template>
    <main>
      <Header /> 
      <SpeciesCount />  
      <ModifyComp />
      <FooterComp />
  
    </main>
  </template>

<style lang="scss" scoped>

</style>