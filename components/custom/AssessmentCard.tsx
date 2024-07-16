import { Assessment } from "@/constants/studentAssessments"
import { SlidingDiv } from "./SlidingDiv"

type AssessmentCardProps = Assessment & {
  index: number
}

export const AssessmentCard: React.FC<AssessmentCardProps> = ({headers, content, color, highlight, corner, number, index}) => {
  
  return (
    <SlidingDiv direction={"top"} delay={index*0.1} className="flex-1 flex md:flex-col items-center gap-2">
      <div className={`relative rotate-90 md:rotate-0 flex justify-center p-1 lg:p-2 rounded-full`} style={{backgroundColor: highlight}}>
        <div className="p-1 lg:p-3 bg-white rounded-full z-10">
          <div className={`rounded-full size-24 lg:size-48 xl:size-52 p-2 lg:p-4 flex flex-col justify-center items-center rounded-${corner}-none`} style={{backgroundColor: color}}>
            <div className="flex -rotate-90 md:rotate-0 flex-col justify-center items-center">
              <h3 className="text-3xl lg:text-5xl xl:text-6xl font-bold" style={{color: highlight}}>{number}</h3>
              <div className="flex flex-col items-center justify-center font-bold text-[10px] leading-none lg:text-xl xl:text-2xl">
                <p>{headers[0]}</p>
                <p>{headers[1]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute w-full h-1/2 bg-white left-0 ${corner === "tr" ? "top-0" : "bottom-0" }`} />
        <div className={`absolute h-1 lg:h-2 w-full flex justify-between top-1/2 z-10 -translate-y-1/2`}>
          <div className="size-1 lg:size-2 rounded-full" style={{backgroundColor: highlight}}></div>
          <div className="relative size-1 lg:size-2 rounded-full" style={{backgroundColor: highlight}}>
            <div className="absolute left-0 h-full w-8 lg:w-16 rounded-full" style={{backgroundColor: highlight}}>
              <div className="relative w-full h-full rounded-full" style={{backgroundColor: highlight}}>
                <div className="absolute w-1/2 rotate-45 -translate-y-[calc(150%)] h-full rounded-full rounded-r-none right-0" style={{backgroundColor: highlight}}></div>
                <div className="absolute w-1/2 -rotate-45 translate-y-[calc(150%)] h-full rounded-full rounded-r-none right-0" style={{backgroundColor: highlight}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[10px] xs:text-[11px] sm:text-xs lg:text-sm xl:text-base leading-none text-center">
        {content}
      </p>
    </SlidingDiv>
  )
}