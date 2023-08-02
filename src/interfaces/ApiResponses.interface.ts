export interface GetPokemon {
  count: number
  next: string
  previous: null
  results: GetPokemonResult[]
}

export interface GetPokemonResult {
  name: string
  url: string
}
