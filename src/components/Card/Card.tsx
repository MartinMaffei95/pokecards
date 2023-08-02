import { FC, useState, useEffect } from 'react'
import { Pokemon, Type } from '../../interfaces'
import { twMerge } from 'tailwind-merge'
import { colorsOfTypes, iconsOfTypes } from '../../config/pkmTypesColors.config'
import { Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/popover'

type Props = {
  id: string
}
const Card: FC<Props> = ({ id }) => {
  const [pkmn, setPkmn] = useState<Pokemon | undefined>()

  const getPokemon = async (id: string) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    setPkmn(data)
  }
  useEffect(() => {
    getPokemon(id)
  }, [])

  return (
    <div
      className="perspective-5 relative 
    
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
          //-[&>_.types-section]:hover:animate-rotate-y
          //-[&>_.types-section]:hover:animate-infinite 
          //-[&>_.types-section]:hover:animate-duration-[8000ms] 
          //-[&>_.types-section]:hover:anima 
          //-[&>_.types-section]:hover:animate-ease-linear 
          //-[&>_.types-section]:hover:animate-fill-forwards

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
          'pkm-card w-36 flex flex-col p-2 rounded-xl  duration-300 overflow-hidden  gap-4 peer',
          colorsOfTypes[pkmn?.types[0]?.type?.name || 'none']
        )}
      >
        <h3>{pkmn?.name}</h3>

        <Types types={pkmn?.types} />
        <img className="overflow-hidden " src={pkmn?.sprites?.front_default} />
        <div className=" shadow-leyer overflow-hidden  absolute top-0 left-0 w-full h-full z-10" />
      </div>
      <Types
        className="types-section absolute top-0 left-0 [&>div]:brightness-75 hover:[&>div]:brightness-110 "
        types={pkmn?.types}
        typeOneClassName="tpo absolute opacity-0 top-12 duration-300   scale-125 shadow-md shadow-neutral-500 "
        typeTwoClassName="tpt left-10 opacity-0 absolute  top-12 duration-300 delay-100   scale-125 shadow-md shadow-neutral-500 "
      />

      <img
        className=" scale-125 absolute bottom-0 left-0 z-10 overflow-hidden  w-full  
         image-leyer opacity-0 pointer-events-none 
        "
        src={pkmn?.sprites?.front_default}
      />
    </div>
  )
}

export default Card

export const Types = ({
  types,
  className,
  typeOneClassName,
  typeTwoClassName,
}: {
  types: Type[] | undefined
  className?: string
  typeOneClassName?: string
  typeTwoClassName?: string
}) => {
  return (
    <>
      {types ? (
        <div className={twMerge('flex gap-2', className)}>
          {types[0]?.type?.name ? (
            <div
              className={twMerge(
                'text-xl p-1 rounded-full shadow-md  brightness-125 ',
                colorsOfTypes[types[0]?.type?.name || 'none'],
                typeOneClassName
              )}
            >
              {iconsOfTypes[types[0]?.type?.name || 'none']}
            </div>
          ) : null}

          {types[1]?.type?.name ? (
            <Popover>
              <PopoverTrigger>
                <div
                  className={twMerge(
                    'text-xl p-1  rounded-full shadow-md brightness-125',
                    colorsOfTypes[types[1]?.type?.name || 'none'],
                    typeTwoClassName
                  )}
                >
                  {iconsOfTypes[types[1]?.type?.name || 'none']}
                </div>
              </PopoverTrigger>
              <PopoverContent>aaa</PopoverContent>
            </Popover>
          ) : null}
        </div>
      ) : null}
    </>
  )
}
