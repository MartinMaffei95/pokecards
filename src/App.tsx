import { useEffect, useState } from 'react'
import Card from './components/Card/Card'
import { GetPokemonResult } from './interfaces'

function App() {
  const [pkmns, setPkmns] = useState<GetPokemonResult[]>([])
  const getPokemons = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=152')
    const data = await res.json()

    setPkmns(data?.results)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div>
      <h2 className="bg-red-600">Pokedex</h2>
      <main className="w-full flex flex-wrap justify-around gap-4 p-4">
        {pkmns.map((pkm) => (
          <Card id={pkm?.name} />
        ))}
      </main>
    </div>
  )
}

export default App