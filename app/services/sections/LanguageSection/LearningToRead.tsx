import { Bullet } from "@/components/custom/Bullet"
import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { readingSteps } from "@/constants/readingSteps"
import { useEffect, useState } from "react"

const Dots: React.FC<{vertical: boolean}> = ({vertical}) => {
  const [count, setCount] = useState(10)
  useEffect(() => {

    const resetCount = () => {
      const windowWidth = window.innerWidth
      if (windowWidth >= 1400) {
        setCount(75)
      } else if (windowWidth >= 1280) {
        setCount(50)
      } else if (windowWidth >= 1024) {
        setCount(40)
      } else if (windowWidth >= 768) {
        setCount(30)
      } else if (windowWidth >= 640) {
        setCount(20)
      }
    }

    window.addEventListener("resize", resetCount)
    resetCount()

    return () => window.removeEventListener("resize", resetCount)
  }, [])

  return (
    <div className={`absolute flex justify-between ${vertical ? "flex-col left-1/2 -translate-x-1/2 top-0 bottom-0" : "top-1/2 left-0 right-0 -translate-y-1/2"}`}>
      {Array.from({length: count}, (_, i) => (
        <div key={`readingDot-${i}`} className={"bg-light-black size-2 rounded-full"} />
      ))}
    </div>
  )
}

export const LearningToRead = () => {
  return (
    <>
    <div className="relative hidden w-full h-screen min-[950px]:flex flex-col origin-center scale-90">
      <Dots vertical={false} />
      <div className="size-full flex z-10">
        {readingSteps.map(({heading, text, color, src, scale=100, translateY=0, translateX=0}, i) => (
          <SlidingDiv delay={i*0.4} direction={i % 2 === 0 ? "top" : "bottom"} px={50}  className={`relative flex-1 flex gap-4 justify-center items-center ${i % 2 === 0 ? "flex-col" : "flex-col-reverse"}`} key={heading}>
            <div className="rounded-full scale-75 w-full aspect-square p-3 min-[1250px]:p-5" style={{backgroundColor: color}}>
              <div className="relative w-full aspect-square rounded-full bg-white">
                <img style={{transform: `translateX(calc(-50% + ${translateX}%)) translateY(calc(-50% + ${translateY}%)) scale(${scale}%) `}} src={src} alt="" className="absolute top-1/2 left-1/2" />
              </div>
            </div>
            <Bullet color={color} />
            <div className={`w-full aspect-square relative`}>
              <div className={`absolute w-full text-center text-sm xl:text-base flex flex-col ${i % 2 === 0 ? "top-0" : "bottom-0"}`}>
                <h4 className="font-bold text-lg xl:text-xl">{heading}</h4>
                <p>{text}</p>
              </div>
            </div>
          </SlidingDiv>
        ))}
      </div>
    </div>
    </>
  )
}
