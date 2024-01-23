<template>
    <div class="photo-input">
      <input ref="fileInput" type="file" hidden @change="onFileChange" />
      <button @click="$refs.fileInput.click()">
        <img v-if="photo" :src="photo" alt="Selected photo" />
        <span v-else>+</span>
      </button>
    </div>
   </template>
   
   <script>
   export default {
    data() {
      return {
        photo: null,
      };
    },
    methods: {
      onFileChange(e) {
        const file = e.target.files[0]("https://www.smashingmagazine.com/2022/03/drag-drop-file-uploader-vuejs-3/");
        if (!file) return;
   
        const reader = new FileReader();
        reader.onload = (e) => {
          this.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      },
    },
   };
   </script>

   <style scoped>
.photo-input button {
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100px;
 height: 100px;
 border-radius: 50%;
 border: 1px solid green;
 background-color: lightgreen;
 font-size: 2em;
}

.photo-input img {
 max-width: 100%;
 max-height: 100%;
 border-radius: 50%;
}
</style>

   