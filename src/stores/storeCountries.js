import { defineStore } from "pinia";

export const useCountryStore = defineStore({
  id: "Countries",
  state: () => ({
    Countries: [],
  }),
  actions: {
    async fetchCountries() {
      const response = await fetch(
        "http://localhost:8080/api/v1/countries"
      );
      const data = await response.json();

      this.Countries = data;

     
    
    },
  },
});