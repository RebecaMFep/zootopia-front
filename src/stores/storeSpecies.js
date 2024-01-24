import { defineStore } from "pinia";

export const useSpecieStore = defineStore({
  id: "Species",
  state: () => ({
    Species: [],
  }),
  actions: {
    async fetchSpecies() {
      const response = await fetch(
        "http://localhost:8080/api/v1/species"
      );
      const data = await response.json();

      this.Species = data;

    },
  },
});