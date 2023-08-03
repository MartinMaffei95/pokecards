import { PokemonType } from '../interfaces'
import { PiSnowflakeBold, PiSparkleFill, PiSpiralFill } from 'react-icons/pi'
import { BiCircle, BiSolidBug } from 'react-icons/bi'
import {
  GiPunch,
  GiFluffyWing,
  GiStonePile,
  GiSeaDragon,
  GiMoon,
} from 'react-icons/gi'
import { MdBubbleChart, MdOutlineWaterDrop } from 'react-icons/md'
import { HiMiniFire } from 'react-icons/hi2'
import { TbGhost2Filled } from 'react-icons/tb'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { FaBolt, FaLeaf, FaMountain } from 'react-icons/fa'
import { BsCircleFill, BsFillNutFill } from 'react-icons/bs'

export const colorsOfTypes: { [type in PokemonType]: string } = {
  none: '',
  normal: 'bg-gradient-to-tr from-orange-400 via-amber-200 to-orange-200',
  fighting: 'bg-gradient-to-b from-red-500 via-red-900 to-red-500',
  flying: 'bg-gradient-to-br from-blue-600 to-blue-900',
  poison: 'bg-gradient-to-br from-purple-400 to-fuchsia-800',
  ground: 'bg-gradient-to-t from-orange-600 to-orange-800',
  rock: 'bg-gradient-to-t from-amber-950 via-orange-700 to-orange-800',
  bug: 'bg-gradient-to-tr from-yellow-200 to-amber-400',
  ghost: 'bg-gradient-to-b from-purple-600 via-purple-900 to-neutral-900',
  steel: 'bg-gradient-to-tr from-stone-600 via-slate-200 to-slate-600',
  fire: 'bg-gradient-to-tr from-red-600 to-yellow-500 via-orange-500',
  water: 'bg-gradient-to-t from-blue-600 to-blue-200',
  grass: 'bg-gradient-to-t from-green-800 to-green-300',
  electric: 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-200',
  psychic: 'bg-gradient-to-br from-rose-600 via-rose-300  to-pink-400',
  ice: 'bg-gradient-to-tr from-cyan-500 via-cyan-200  to-cyan-500',
  dragon: 'bg-gradient-to-t from-purple-300  via-purple-400  to-purple-800',
  dark: 'bg-gradient-to-b from-neutral-700 to-neutral-900',
  fairy: 'bg-gradient-to-tr from-pink-300 to-pink-100',
  unknown: 'bg-gradient-to-tr from-red-600 to-blue-200',
  shadow: 'bg-gradient-to-tr from-violet-600 via-neutral-950 to-violet-500',
}

export const iconsOfTypes: { [type in PokemonType]: React.ReactNode } = {
  none: '',
  normal: <BiCircle />,
  fighting: <GiPunch className="text-neutral-50" />,
  flying: <GiFluffyWing className="text-neutral-50" />,
  poison: <MdBubbleChart />,
  ground: <FaMountain />,
  rock: <GiStonePile className="text-neutral-400" />,
  bug: <BiSolidBug className="text-lime-800" />,
  ghost: <TbGhost2Filled className="text-neutral-50" />,
  steel: <BsFillNutFill />,
  fire: <HiMiniFire />,
  water: <MdOutlineWaterDrop />,
  grass: <FaLeaf />,
  electric: <FaBolt />,
  psychic: <PiSpiralFill className="text-neutral-800" />,
  ice: <PiSnowflakeBold />,
  dragon: <GiSeaDragon className="text-red-600" />,
  dark: <GiMoon />,
  fairy: <PiSparkleFill />,
  unknown: <AiFillQuestionCircle />,
  shadow: <BsCircleFill />,
}
