<script setup>
// export default {
//   methods: {
//     async generateSpecimen() {
//       try {
//         // Realizar solicitud a la OpenAI GPT-3 API para generar un especimen
//         const response = await this.$axios.post('URL_DE_TU_API', {
//           prompt: 'Generar un nuevo especimen para Zootopia',
//           // Otros parámetros de solicitud según la documentación de la API
//         });

//         // Manejar la respuesta de la API aquí

//         console.log('Respuesta de la API:', response.data);
//       } catch (error) {
//         console.error('Error al llamar a la API:', error);
//       }
//     },
//     logout() {
//       // Lógica para cerrar sesión
//       console.log('Cerrar sesión');
//     },
//   },
// };
</script>
<template>
   
<div class="containAll">

  <header class="app-header">
    <div class="title">Zootopia</div>
    <div class="buttons">
      <button class="rounded-button" @click="generateSpecimen">ANIMALS</button>
      <button class="rounded-button" @click="logout">LOG OUT</button>
    </div>
  </header>
</div>
</template>

<style lang="scss" scoped>
header {
  background-image: url("../../assets/images/TIN-319_Zootopia_large.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 250px;
  @media (max-width: 800px) {
    background-size: cover;
    margin: 0 auto;
  
   
  }
}


.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 58px;
  margin: 0;
  color: black;
  font-family: 'Libre Barcode 39 Text', system-ui;
  
  @media (max-width: 660px) {
    font-size: 44px;
  }
  @media (max-width: 555px) {
    font-size: 38px;
  }
  @media (max-width: 555px) {
    display: flex;
    justify-content: center;
  }
}

.buttons {
  display: flex;
  align-items: flex-end; 
  margin-top: 130px; 
  
  
}

.rounded-button {
  margin-left: 10px;
  padding: 10px 50px;
  border: none;
  border-radius: 25px;
  background-color: #386F5B;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Langar', system-ui;

  &:hover {
    background-color: #6eaf97;
  }

  @media (max-width: 660px) {
    padding: 5px 10px;
    border-radius: 20px;
  }
}
</style>
