import { LoadingBall } from '../Loading/LoadingBall'

const SkeletonCard = () => {
  return (
    <div className="w-60 min-h-80 h-80 p-4 gap-4 aspect-video flex flex-col animate-pulse bg-neutral-300 rounded">
      <div className="flex w-full h-8 rounded bg-neutral-400" />
      <div className="flex gap-2">
        <div className="flex w-8 h-8 aspect-square rounded bg-neutral-400" />
        <div className="flex w-8 h-8 aspect-square rounded bg-neutral-400" />
      </div>

      <div className="w-full h-full flex items-center justify-center bg-neutral-400 rounded">
        <LoadingBall />
      </div>
    </div>
  )
}
export default SkeletonCard
