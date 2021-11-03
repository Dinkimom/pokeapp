import axios from "axios";
import { PokemonShortInfo } from "../types/Pokemon";

export const pokeAPI = {
  getPokemons: async (): Promise<PokemonShortInfo[]> => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );

    return response.data.results;
  },
};
