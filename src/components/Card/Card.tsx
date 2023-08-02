import { FC, useState, useEffect } from 'react';
import { Pokemon, Type } from '../../interfaces';
import { twMerge } from 'tailwind-merge';
import {
  colorsOfTypes,
  iconsOfTypes,
} from '../../config/pkmTypesColors.config';
import { Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/popover';
import Tooltip from '../Tooltip/Tooltip';
import { GiPokecog } from 'react-icons/gi';
import flyBg from '../../assets/backgrunds/fly.svg';
type Props = {
  id: string;
};
const Card: FC<Props> = ({ id }) => {
  const [pkmn, setPkmn] = useState<Pokemon | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const getPokemon = async (id: string) => {
    setLoading(true);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    setPkmn(data);

    setLoading(false);
  };
  useEffect(() => {
    getPokemon(id);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-60 min-h-80 h-80 p-4 gap-4 aspect-video flex flex-col animate-pulse bg-neutral-300">
          <div className="flex w-full h-8 rounded bg-neutral-400" />
          <div className="flex gap-2">
            <div className="flex w-8 h-8 aspect-square rounded bg-neutral-400" />
            <div className="flex w-8 h-8 aspect-square rounded bg-neutral-400" />
          </div>

          <div className="w-full h-full flex items-center justify-center bg-neutral-400 rounded">
            <LoadingBall />
          </div>
        </div>
      ) : (
        <div
          className="perspective-5 relative 
      w-60
      
      min-h-[80]
          cursor-pointer
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
          [&_.pkm-name]:hover:animate-jump-in 
          [&_.pkm-name]:hover:animate-ease-in-out 
          [&_.pkm-name]:hover:animate-fill-forwards
          [&>_.image-leyer]:hover:duration-500
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
              'pkm-card  flyBg flex flex-col p-2 rounded-xl  duration-300 overflow-hidden  gap-4 peer',
              colorsOfTypes[pkmn?.types[0]?.type?.name || 'none']
            )}
          >
            <h3 className="capitalize font-medium text-xl tracking-wider">
              {pkmn?.name}
            </h3>
            <Types types={pkmn?.types} />
            <img
              className="overflow-hidden "
              src={pkmn?.sprites?.front_default}
              onLoad={(e) => console.log(e)}
            />
            <div className=" shadow-leyer overflow-hidden  absolute top-0 left-0 w-full h-full z-10" />
          </div>
          <Types
            withLabel
            className="types-section absolute gap-4 top-0 left-0 [&>div]:brightness-75 hover:[&>div]:brightness-110 "
            types={pkmn?.types}
            typeOneClassName="tpo relative opacity-0 top-12 duration-300   scale-125 shadow-md shadow-neutral-500 "
            typeTwoClassName="tpt opacity-0 relative  top-12 duration-300 delay-100   scale-125 shadow-md shadow-neutral-500 "
          />

          <img
            className="  absolute bottom-0 left-0 z-20 overflow-hidden  w-full  
         image-leyer opacity-0 pointer-events-none 
         
        "
            src={pkmn?.sprites?.front_default}
          />
          <div className=" z-10 top-0 left-0 flex w-full pointer-events-none  h-full items-center justify-center absolute">
            <p className="pkm-name opacity-0 bottom-4 mt-16 pointer-events-none font-bungee   text-5xl font-bold ">
              {pkmn?.name}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

export const Types = ({
  types,
  className,
  typeOneClassName,
  typeTwoClassName,
  withLabel,
}: {
  types: Type[] | undefined;
  className?: string;
  typeOneClassName?: string;
  typeTwoClassName?: string;
  withLabel?: boolean;
}) => {
  return (
    <>
      {types && withLabel ? (
        <div className={twMerge('flex gap-2', className)}>
          {types[0]?.type?.name ? (
            <Tooltip label={types[0]?.type?.name}>
              <div
                className={twMerge(
                  'text-xl p-1 rounded-full shadow-md  brightness-125 ',
                  colorsOfTypes[types[0]?.type?.name || 'none'],
                  typeOneClassName
                )}
              >
                {iconsOfTypes[types[0]?.type?.name || 'none']}
              </div>
            </Tooltip>
          ) : null}

          {types[1]?.type?.name ? (
            <Tooltip label={types[1]?.type?.name}>
              <div
                className={twMerge(
                  'text-xl p-1  rounded-full shadow-md brightness-125',
                  colorsOfTypes[types[1]?.type?.name || 'none'],
                  typeTwoClassName
                )}
              >
                {iconsOfTypes[types[1]?.type?.name || 'none']}
              </div>
            </Tooltip>
          ) : null}
        </div>
      ) : null}
      {types && !withLabel ? (
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
            <div
              className={twMerge(
                'text-xl p-1  rounded-full shadow-md brightness-125',
                colorsOfTypes[types[1]?.type?.name || 'none'],
                typeTwoClassName
              )}
            >
              {iconsOfTypes[types[1]?.type?.name || 'none']}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export const LoadingBall = () => (
  <GiPokecog className="text-6xl animate-spin" />
);
