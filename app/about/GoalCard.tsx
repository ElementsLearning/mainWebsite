import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { Goal } from "@/constants/goals"

type GoalCardProps = Goal & {
  index: number
}

export const GoalCard: React.FC<GoalCardProps> = ({color, innerBg, src, title, content, index}) => {
  
  return (
    <SlidingDiv direction={"top"} delay={index*0.2} className="flex flex-row md:flex-col flex-1 rounded-[50px] rounded-tl-none gap-4 max-w-md" style={{backgroundColor: color}}>
      <div className="flex items-center p-5 md:p-6 lg:p-12 overflow-hidden justify-center aspect-square rounded-full size-24 md:size-36 lg:size-56 rounded-tl-none" style={{backgroundColor: innerBg}}>
        <img src={src} alt="" className="h-full" />
      </div>
      <div className="flex flex-1 md:flex-auto flex-col text-sm md:text-lg md:gap-1 p-6 xl:p-10 md:h-[420px] min-[800px]:h-96 min-[870px]:h-80">
        <h4 className="font-bold text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</h4>
        <p className="text-xs xs:text-xs md:text-base">{content}</p>
      </div>
    </SlidingDiv>
  )
}