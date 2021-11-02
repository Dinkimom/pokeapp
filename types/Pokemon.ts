export interface PokemonShortInfo {
  name: string;
  url: string;
}

export interface GetPokemonsDto {
  results: PokemonShortInfo[];
}
