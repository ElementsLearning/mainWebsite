import { Bullet } from "@/components/custom/Bullet"
import { FadeIn } from "@/components/custom/FadeIn"
import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { Card } from "@/components/ui/card"
import { readingSteps } from "@/constants/readingSteps"

type StepCardProps = {
  color: string
  text: string
  heading: string
  src: string
}

const StepCard: React.FC<StepCardProps> = ({color, heading, text, src}) => {

  return (
    <SlidingDiv direction={"top"} px={20} threshold={0.8} className="flex gap-4 items-center z-10">
      <Bullet color={color} />
      <Card className="shadow-md w-full p-6 flex gap-2 items-center">
        <div className="w-16 xs:w-20 sm:w-28 md:w-32 flex justify-center">
          <img src={src} alt="" className="h-20 sm:h-24"/>
        </div>
        <div className={`flex-1 flex flex-col text-sm sm:text-base`}>
          <h4 className="font-bold text-base sm:text-lg">{heading}</h4>
          <p>{text}</p>
        </div>
      </Card>
    </SlidingDiv>
  )
}

const Dots = () => {
  const x = 0
  const coords = []
  for (let y = 0.1; y <= 0.9 ; y += 0.03) {
    coords.push({x, y})
  }

  return coords.map(({x, y}) => (
    <FadeIn key={`readingDotV-${y}`} className="absolute ml-10 sm:ml-[2.75rem] bg-black size-2 rounded-full -translate-x-1/2 -translate-y-1/2" style={{left: `${x*100}%`, top: `${y*100}%`}} delay={0.2}/>
  ))
}

export const LearningToReadMobile = () => {
  return (
    <div className="relative w-full p-4 flex min-[950px]:hidden flex-col gap-4">
      {readingSteps.map((step, i) => (
        <StepCard {...step} key={step.heading} />
      ))}
      <Dots />
    </div>
  )
}