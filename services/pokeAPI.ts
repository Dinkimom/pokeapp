import axios from "axios";

export const pokeAPI = {
  getPokemons: async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );

      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  },
};
