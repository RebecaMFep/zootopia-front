<script setup>

</script>

<template>
  <footer>
    <div class="columns">

      <div class="column">
        <h4><u>About Zootopia</u></h4>
        <p>Somos una entidad enfocada en la reinserción de animales en peligro</p>
      </div>

      <div class="column">
        <h4><u>Social Media</u></h4>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img class="img" src="../assets/photos/fb.png" alt="fb">  facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img class="img" src="../assets/photos/twter.png" alt="twter">  twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img class="img" src="../assets/photos/ig.png" alt="ig">  instagram</a>
      </div>
    </div>

    <div><h4 class="year">2024©</h4></div>

  </footer>
</template>

<style lang="scss" scoped>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    footer {
      background-color: #386F5B;
      color: #fff;
      padding: 30px;
    }

    .columns {
      display: flex;
      justify-content: space-around;
      max-width: 1200px;
      margin-bottom: 10px;
      text-align: start;
      font-family:Verdana, Geneva, Tahoma, sans-serif;
  

    .column {
      //width: 48%;
    }
    .img {
      width: 10%;
    }
  }
    .year{
      text-align: end;
    }
</style>