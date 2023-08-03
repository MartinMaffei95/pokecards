import { twMerge } from 'tailwind-merge'
import { Type } from '../../interfaces'
import Tooltip from '../Tooltip/Tooltip'
import PkmType from './PkmType'

export const Types = ({
  types,
  className,
  typeOneClassName,
  typeTwoClassName,
  withLabel,
}: {
  types: Type[] | undefined
  className?: string
  typeOneClassName?: string
  typeTwoClassName?: string
  withLabel?: boolean
}) => {
  return (
    <>
      {types && withLabel ? (
        <div className={twMerge('flex gap-2', className)}>
          {types[0]?.type?.name ? (
            <Tooltip label={types[0]?.type?.name}>
              <PkmType
                type={types[0]?.type?.name}
                className={typeOneClassName}
              />
            </Tooltip>
          ) : null}

          {types[1]?.type?.name ? (
            <Tooltip label={types[1]?.type?.name}>
              <PkmType
                type={types[1]?.type?.name}
                className={typeTwoClassName}
              />
            </Tooltip>
          ) : null}
        </div>
      ) : null}
      {types && !withLabel ? (
        <div className={twMerge('flex gap-2', className)}>
          {types[0]?.type?.name ? (
            <PkmType type={types[0]?.type?.name} className={typeOneClassName} />
          ) : null}

          {types[1]?.type?.name ? (
            <PkmType type={types[1]?.type?.name} className={typeTwoClassName} />
          ) : null}
        </div>
      ) : null}
    </>
  )
}
