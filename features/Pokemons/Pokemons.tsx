import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { pokeAPI } from "../../services/pokeAPI";
import { PokemonShortInfo } from "../../types/Pokemon";
import { Pokemon } from "./components/Pokemon";

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
    <View style={styles.container}>
      <Text style={styles.title}>Pokeapp</Text>
      <FlatList
        data={pokemons}
        // ! Привет костыль, неудобство во внешнем ресурсе
        renderItem={({ item, index }) => (
          <Pokemon index={index + 1} data={item} />
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  list: {
    padding: 16,
    marginTop: 16,
  },
});
