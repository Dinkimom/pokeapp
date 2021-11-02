import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { imageService } from "../../../../services/imageService";
import { PokemonShortInfo } from "../../../../types/Pokemon";

interface PokemonProps {
  index: number;
  data: PokemonShortInfo;
}

export const Pokemon: React.FC<PokemonProps> = ({ index, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Image
        style={styles.image}
        source={{ uri: imageService.getImageByIndex(index) }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    backgroundColor: "lightgrey",
    marginBottom: 16,
    borderRadius: 8,
    padding: 16,
  },
  name: {
    textAlign: "center",
    fontSize: 32,
    textTransform: "capitalize",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
