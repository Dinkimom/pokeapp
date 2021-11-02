import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { PokemonShortInfo } from "../../../../types/Pokemon";

interface PokemonProps {
  data: PokemonShortInfo;
}

export const Pokemon: React.FC<PokemonProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    backgroundColor: "yellow",
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
  },
  name: {
    textAlign: "center",
    fontSize: 24,
  },
});
