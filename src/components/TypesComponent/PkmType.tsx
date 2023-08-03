import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { colorsOfTypes, iconsOfTypes } from '../../config/pkmTypesColors.config'
import { PokemonType } from '../../interfaces'

type Props = {
  type: PokemonType
  className?: string
}
const PkmType: FC<Props> = ({ type, className }) => {
  return (
    <div
      className={twMerge(
        'text-xl p-1  rounded-full shadow-md brightness-125',
        colorsOfTypes[type || 'none'],
        className
      )}
    >
      {iconsOfTypes[type || 'none']}
    </div>
  )
}

export default PkmType
