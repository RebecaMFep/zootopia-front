<script setup>

import { useCountryStore } from '../stores/storeCountries';
import { useSpecieStore } from '../stores/storeSpecies';
import { useGenderStore } from '../stores/storeGenders';
import { useFamilyStore } from '../stores/storeFamilies';
import { onMounted, onBeforeMount } from 'vue';

const photo = ref(null);

const store = useCountryStore();
const storeSpecie = useSpecieStore();
const storeGender = useGenderStore();
const storeFamilies = useFamilyStore();

const onFileChange = (event) => {
 const file = event.target.files[0];
 if (!file) return;

 const reader = new FileReader();
 reader.onload = (e) => {
    photo.value = e.target.result;
 };
 reader.readAsDataURL(file);
};
onBeforeMount(async () => {
  await store.fetchCountries();
  await storeSpecie.fetchSpecies();
  await storeGender.fetchGenders();
  await storeFamilies.fetchFamilies();
})

let animal = {
  photo: "",
  name: "",
  family: "",
  id_gender: "",
  id_country: "",
  id_specie: "",
  date: "",
}

async function save() {

  if (
    animal.name == "") {
    alert("Name is needed")
    return
  }

  if (
    animal.family == "") {
    alert("Family is needed")
    return
  }

  if (
    animal.date == "") {
    alert("Date is needed")
    return
  }
  if (
    animal.id_specie == "") {
    alert("Specie is needed")
    return
  }
  if (
    animal.id_country == "") {
    alert("Country is needed")
    return
  }
  if (
    animal.id_gender == "") {
    alert("Gender is needed")
    return
  }

  const payload = JSON.stringify(this.animal);
  const url = "http://localhost:8080/api/v1/animals";
  const r = await fetch(url, {
    method: "POST",
    body: payload,
    headers: {
      "Content-type": "application/json",
    }
  });
  const response = r;
  if (response) {
    alert("Added " + animal.name);
    resetForm();
  } else {
    alert("An error has occurred.\nPlease try again after a few minutes.");
  }
}

function resetForm(){
  document.getElementById("addAnimal").reset();
}
</script>

<template>
 <div class="form-container">
  <form @submit.prevent="onSubmit" class="addAnimal">

     <div class="column left-column">
    
      <div class="photo-input">
        <input ref="fileInput" type="file" hidden @change="onFileChange" />
        <button @click="$refs.fileInput.click()">
          <img v-if="photo" :src="photo" alt="Selected photo" />
          <span v-else>+</span>
        </button>

        <label for="inputName">Name</label> 
      <input type="text" id="inputName" v-model="animal.name" placeholder="Name" required />
      </div>
    </div>

     <div class="column right-column">
      <h1> ADD A NEW SPECIE</h1>

      
        <label for="inputGender">Gender</label>
        <select v-model="animal.id_gender" id="inputGender" class="form-select">
        <option selected value="">Select a gender</option>
        <option :value="gender.id" v-for="gender in storeGender.Genders" :key="gender">{{ gender.name }}</option>
      </select>

      </div>

        <label for="inputFamily">Family</label> 
          <select v-model="animal.id_family" id="inputFamily" class="form-select">
          <option selected></option>
          <option>Felids</option>
          <option>Canids</option>
          <option>Reptiles</option>
          <option>Mustelids</option>
          <option>Leporidae</option>
        </select>
       
        <label for="inputSpecie">Specie</label> 
        <select v-model="animal.id_specie" id="inputSpecie" class="form-select">
          <option selected value="">Select a specie</option>
          <option :value="specie.id" v-for="specie in storeSpecie.Species" :key="specie">{{ specie.name }}</option>
        </select>
       
        <label for="inputCountry">Country</label> 
        <select v-model="animal.id_country" id="inputCountry" class="form-select">
          <option selected value="">Select a country</option>
          <option :value="country.id" v-for="country in store.Countries" :key="country">{{ country.name }}</option>
        </select>

        <label for="inputDate">Admission's date</label> 
          <input type="date" id="startDate" v-model="animal.date" required /> 
        
          <div class="button">
          <button type="Add" id="addBtn">Add</button>
          <button type="reset" @click="deleteAnimal" id="resetBtn">Reset</button>
          <button type="button" @click="closeForm" id="closeBtn">Cancel</button>
        </div>
      
      </form>


</div>

</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@600&display=swap');

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.addAnimal {
  display: flex;
  width: 750px;
}
  

form{
  border: 10px solid #386F5B;
  border-radius: 28px;
  padding: 3%;
  margin-bottom: 2px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2em;
}

.photo-input button {
 display: flex;
 align-items: center;
 justify-content: center;
 width: 5em;
 height: 5em;
 border-radius: 50%;
 border: 2px solid #386F5B;
 background-color: #D9D9D9;
 font-size: 3em;
}

.photo-input img {
  display: flex;
  align-items: flex-end;
  max-width: 90%;
  max-height: 90%;
  border-radius: 50%;
}

.column {
  flex: 1; 
  padding: 10px;
  display: flex;
  flex-direction: column; 
  width: 50%;
}

.left-column{
  margin-right: 50px;
}
h1{
  display: flex;
  justify-content: center;
  margin-bottom: 1px;
  font-family: 'Big Shoulders Stencil Text', sans-serif;
  -webkit-text-stroke: 1.5px black;
  color: #9EC4B6;
  font-size: 1.8rem;

}

input[type=text], input[type=file], input[type=date] {
 border: 2px solid #386F5B;
 background-color: #D9D9D9;
 border-radius: 25px;
 padding: 4px;
 margin-bottom: 10px;
 display: flex;
 width: 100%;
}

select{
  border: 2px solid #386F5B;
 background-color: #D9D9D9;
 border-radius: 25px;
 padding: 4px;
 margin-bottom: 10px;
 display: flex;
 width: 100%;
}
.custom-dropdown{
  position: relative;
  display: inline-block;
  border: 2px solid #386F5B;
  background-color: #D9D9D9;
  border-radius: 25px;
  padding: 4px;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
}

.custom-dropdown select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
 
}

button {
 background-color: #D9D9D9;
 border: 2px solid #386F5B;
 border-radius: 50px;
 padding: 3px 20px;
 margin-top: 10px;
 margin-left: 4%;
 cursor: pointer;


}

button:hover {
 background-color: #386F5B;
}
</style>

