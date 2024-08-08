import { Bullet } from "@/components/custom/Bullet"
import { FadeIn } from "@/components/custom/FadeIn"
import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { journeySteps } from "@/constants/journeySteps"

type JourneyCardProps = {
  color: string
  content: React.ReactNode
  header: string
}

const JourneyCard: React.FC<JourneyCardProps> = ({color, header, content}) => {

  return (
    <SlidingDiv direction={"top"} px={20} threshold={0.8} className="flex items-center gap-2 w-full z-10">
      <Bullet color={color} />
      <div className="flex flex-col gap-2 p-6 rounded-md shadow-md border w-full">
        <p className="text-xl font-bold">{header}</p>
        {content}
      </div>
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
    <FadeIn key={`JourneyDotMobile-${y}`} className="absolute ml-10 sm:ml-[2.75rem] bg-black size-2 rounded-full -translate-x-1/2 -translate-y-1/2" style={{left: `${x*100}%`, top: `${y*100}%`}} delay={0.2}/>
  ))
}

export const OurJourneyMobile = () => {
  return (
    <div className="relative w-full p-4 flex min-[950px]:hidden flex-col gap-4">
      {journeySteps.map(({color, header, content}, i) => (
        <JourneyCard color={color} header={header} content={content} key={header} />
      ))}
      <Dots />
    </div>
  )
}