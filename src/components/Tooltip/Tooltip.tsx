import { FC, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  label: string
}
const Tooltip: FC<Props> = ({ children, label }) => {
  return (
    <div className="relative [&>div]:hover:opacity-100 cursor-pointer ">
      {children}

      <div className="capitalize absolute overflow-visible w-max p-1 mt-4 rounded  duration-200 pointer-events opacity-0 bottom-full left-0  bg-neutral-800 text-neutral-50 text-sm tracking-wide">
        {label}
      </div>
    </div>
  )
}

export default Tooltip
