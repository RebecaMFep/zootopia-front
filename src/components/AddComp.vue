<script>
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
    data() {
      return {
        form: {
          photo: null,
          name: '',
          genre: null,
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
 
 <form @submit.prevent="onSubmit">
  <h1> ADD A NEW SPECIE</h1>
   <div class="row">
     <div class="column">
    
      

      <input type="file" id="photo" />
      <label for="name">Name</label> 
      <input type="text" id="name" v-model="name" placeholder="Name" required />
     </div>
     <div class="column">

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
      </div>
   </div>
   <div class="button">
   <button type="Add">Add</button>
   <button type="reset" @click="deleteAnimal">Reset</button>
   <button type="button" @click="closeForm">Cancel</button>
  </div>
  </form>

</template>
<style lang="scss" scoped>

h1{
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
form{
  border: 10px solid #386F5B;
  border-radius: 28px;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 20PX;
}
.row {
 display: flex;
 justify-content: space-between;
}

.column {
 width: 50%;
}

input[type=text], input[type=file], input[type=date] {
 border: 2px solid #386F5B;
 background-color: #D9D9D9;
 border-radius: 25px;
 padding: 5px;
 margin-bottom: 10px;
 display: flex;
justify-content: center;
}

button {
 background-color: #D9D9D9;
 border: 2px solid #386F5B;
 border-radius: 50px;
 padding: 9px 20px;
 margin-top: 10px;
 cursor: pointer;
 display: flex;
justify-content: center;
align-items: center;
}

button:hover {
 background-color: #386F5B;
}
</style>

