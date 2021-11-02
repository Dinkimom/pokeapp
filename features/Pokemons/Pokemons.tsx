import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { pokeAPI } from "../../services/pokeAPI";
import { PokemonShortInfo } from "../../types/Pokemon";

export const Pokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonShortInfo[]>([]);

  const getPokemons = async () => {
    try {
      const pokemons = await pokeAPI.getPokemons();

      setPokemons(pokemons);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <View>
      <Text>Here will be a pokemons list</Text>
    </View>
  );
};
