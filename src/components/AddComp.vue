<script>
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
    data() {
      return {
        form: {
          photo: null,
          name: '',
          genre: '',
          family: null,
          specie: null,
          country: null,
          date: '',
          checked: []
        },
        genre: [{ text: 'Select One', value: null }, 'Male', 'Female'],
        show: true,
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      methods: {
   onFileChange(e) {
     const file = e.target.files[0];
     if (!file) return;

     const reader = new FileReader();
     reader.onload = (e) => {
       this.photo = e.target.result;
     };
     reader.readAsDataURL(file);
   },
 },

      onReset(event) {
        event.preventDefault()
        this.form.photo = null
        this.form.name = ''
        this.form.genre = null
        this.form.family = null
        this.form.specie = null
        this.form.country = ''
        this.form.date = ''

        this.form.checked = []
        
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      closeForm() {
     
      }
    }
  }
</script>

<template>
 <div class="form-container">
 <form @submit.prevent="onSubmit" class="custom-form">
   <div class="row">

     <div class="column left-column">
    
      <div class="photo-input">
        <input ref="fileInput" type="file" hidden @change="onFileChange" />
        <button @click="$refs.fileInput.click()">
          <img v-if="photo" :src="photo" alt="Selected photo" />
          <span v-else>+</span>
        </button>
        <label for="name">Name</label> 
      <input type="text" id="name" v-model="name" placeholder="Name" required />
      </div>
    </div>

     <div class="column right-column">
      <h1> ADD A NEW SPECIE</h1>
        <label for="genre">Genre</label>
          <input type="text" id="genre" v-model="form.genre"
            :options="genre"
            required placeholder="Genre" />

        <label for="family">Family</label> 
          <input type="text" id="family" v-model="family" placeholder="Family" required />
       
        <label for="Specie">Specie</label> 
          <input type="text" id="Specie" v-model="specie" placeholder="Specie" required />
       
        <label for="Country">Country</label> 
          <input type="text" id="Country" v-model="country" placeholder="Country" required />

        <label for="date">Admission's date</label> 
          <input type="date" id="date" v-model="date" required /> 
        
          <div class="button">
          <button type="Add">Add</button>
          <button type="reset" @click="deleteAnimal">Reset</button>
          <button type="button" @click="closeForm">Cancel</button>
        </div>

        </div>
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

.custom-form {
  display: flex;
  width: 750px;
}
  

form{
  border: 10px solid #386F5B;
  border-radius: 28px;
  padding: 3%;
  margin-bottom: 2px;
  margin-top: 2px;
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

.row {
 display: flex;
 justify-content: space-between;
 padding: 2%;
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

