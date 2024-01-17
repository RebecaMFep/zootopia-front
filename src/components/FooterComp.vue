<script setup>
//data: () => ({
      //icons: [
        //'mdi-facebook',
        //'mdi-twitter',
        //'mdi-linkedin',
        //'mdi-instagram',
      //],
    //}),
</script>

<template>
  <v-footer
    class="bg-green-darken-3 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">About Zootopia <br>
        Somos una entidad enfocada en la reinserción de animales en peligro</div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>©</strong>
    </div>
  </v-footer>
</template>

<style lang="scss" scoped>

</style>