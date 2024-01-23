<script>


export default {

    data() {
        return {
            speciesCount: 0,
            selectedSpecies: [],
            animalInfo: [
                {
                    name: 'Animal 1',
                    species: [
                        { id: 1, name: 'Species A' },
                        { id: 2, name: 'Species B' },
                        { id: 3, name: 'Species C' },
                        { id: 4, name: 'Species D' },
                        { id: 5, name: 'Species E' },
                    ],
                },
                // ... más animales
            ],
        };
    },
    mounted() {

        this.fetchSpeciesCount();
    },
    methods: {
        async fetchSpeciesCount() {
            try {
                // Simplemente como ejemplo, utiliza un valor ficticio para speciesCount
                // en lugar de hacer una solicitud real al backend.
                // Debes reemplazar esto con la lógica real para obtener el contador de especies.
                // const response = await axios.get('URL_DE_TU_API/species/count');
                // this.speciesCount = response.data.count;

                this.speciesCount = 200; // Valor ficticio
            } catch (error) {
                console.error('Error al obtener el número de especies:', error);
            }
        },
    },
};
</script>
<template>
    <div class="species-info">
        <h2>SPECIES</h2>
        <p class="numberCount">{{ speciesCount }}</p>
    </div>
</template>
<style lang="scss" scoped>
.species-info {
  text-align: center;
  margin-top: 20px; /* Ajusta según tus necesidades */
  font-family: 'Josefin Sans', sans-serif;
}
.numberCount {
    color: #386F5B;
    font-size: 50px;
}
</style>