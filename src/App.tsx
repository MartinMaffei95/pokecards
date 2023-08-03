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
    <div className="bg-neutral-950 h-full min-h-screen max-w-screen overflow-hidden p-8 sm:p-16">
      <main className=" flex flex-wrap justify-around gap-4 ">
        {pkmns.map((pkm) => (
          <Card key={pkm?.url} id={pkm?.name} />
        ))}
      </main>
    </div>
  )
}

export default App
