import { FC, useState, useEffect } from 'react'
import { Pokemon } from '../../interfaces'
import { twMerge } from 'tailwind-merge'
import { colorsOfTypes } from '../../config/pkmTypesColors.config'
import { Types } from '../TypesComponent/TypesContainer'
import SkeletonCard from './SkeletonCard'
type Props = {
  id: string
}
const Card: FC<Props> = ({ id }) => {
  const [pkmn, setPkmn] = useState<Pokemon | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const getPokemon = async (id: string) => {
    setLoading(true)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    setPkmn(data)

    setLoading(false)
  }
  useEffect(() => {
    getPokemon(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading ? (
        <SkeletonCard />
      ) : (
        <div
          className="perspective-5 relative w-60 min-h-[80] cursor-pointer hover:z-20
          [&>_.pkm-card]:hover:rotate-x-50 
          [&>_.pkm-card]:hover:rotate-y-0 
          [&>_.pkm-card]:hover:-rotate-z-0

          [&_.tpo]:hover:opacity-100 
          [&_.tpo]:hover:top-0

          [&_.tpt]:hover:opacity-100 
          [&_.tpt]:hover:top-0

          [&_.tpo]:hover:!delay-0
          [&_.tpt]:hover:!delay-50
          [&_.tpo]:hover:!duration-300
          [&_.tpt]:hover:!duration-300
      
          [&_.pkm-name]:hover:opacity-100
          [&_.img-rotating]:hover:scale-125
          [&_.pkm-name]:hover:animate-jump-in 
          [&_.pkm-name]:hover:animate-ease-in-out 
          [&_.pkm-name]:hover:animate-fill-forwards
          [&_.pkm-name]:hover:z-[1000]

          [&>_.image-leyer]:hover:duration-150
          [&>_.image-leyer]:hover:-top-0
          [&>_.image-leyer]:hover:opacity-100 
          [&>_.image-leyer]:hover:bottom-8
          [&>_.image-leyer]:hover:animate-rotate-y
          [&>_.image-leyer]:hover:animate-infinite 
          [&>_.image-leyer]:hover:animate-duration-[8000ms] 
          [&>_.image-leyer]:hover:anima 
          [&>_.image-leyer]:hover:animate-ease-linear 
          [&>_.image-leyer]:hover:animate-fill-forwards

          [&_.shadow-leyer]:hover:bg-gradient-to-t
          [&_.shadow-leyer]:hover:from-black
          [&_.shadow-leyer]:hover:to-transparent

    "
        >
          <div
            className={twMerge(
              'pkm-card  flex flex-col p-2 rounded-xl  duration-300 overflow-hidden  gap-4 peer',
              colorsOfTypes[pkmn?.types[0]?.type?.name || 'none']
            )}
          >
            <h3 className="capitalize font-medium text-xl tracking-wider">
              {pkmn?.name}
            </h3>
            <Types types={pkmn?.types} />
            <img
              className="overflow-hidden min-w-full aspect-square"
              src={pkmn?.sprites?.front_default}
              onLoad={(e) => console.log(e)}
            />
            <div className=" shadow-leyer overflow-hidden  absolute top-0 left-0 w-full h-full " />
          </div>
          <Types
            withLabel
            className="types-section absolute gap-4 top-0 left-0 [&>div]:brightness-75 hover:[&>div]:brightness-110 "
            types={pkmn?.types}
            typeOneClassName="tpo relative opacity-0 top-12 duration-300   scale-125 shadow-md shadow-neutral-500 "
            typeTwoClassName="tpt opacity-0 relative  top-12 duration-300 delay-100   scale-125 shadow-md shadow-neutral-500 "
          />

          <div className="image-leyer absolute bottom-0 left-0 z-20 overflow-visible  w-full opacity-0 pointer-events-none duration-150">
            <img
              className={twMerge(
                'img-rotating w-full pointer-events-none ',
                ' '
              )}
              src={pkmn?.sprites?.front_default}
            />
          </div>
          <div className="  top-0 left-0 flex w-full pointer-events-none  h-full items-center justify-center absolute overflow-visible ">
            <p className="pkm-name opacity-0 bottom-4 mt-16 pointer-events-none font-bungee   text-5xl font-bold  z-20 ">
              {pkmn?.name}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
