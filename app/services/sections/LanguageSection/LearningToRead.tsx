import { Bullet } from "@/components/custom/Bullet"
import { Card } from "@/components/ui/card"
import { ReactNode, useEffect, useState } from "react"

type ReadingStep = {
  heading: string | ReactNode
  text: string
  src: string
  color: string
  scale?: number
  translateY?: number
  translateX?: number
}

const readingSteps: ReadingStep[] = [
  {
    heading: "L1",
    text: "Introduction to basic language skills with a focus on foundational vocabulary and simple sentences.",
    color: "#F3811F",
    src: "/language/reading/1.png",
    scale: 120
  },
  {
    heading: "L1 -> L2",
    text: "Transitioning from the first language (L1) to a second language (L2), building bilingual skills.",
    color: "#EB008B",
    src: "/language/reading/2.png",
    scale: 80
  },
  {
    heading: "GK + VOCAB",
    text: "Expanding general knowledge and vocabulary to build a well-rounded unerstanding of the world.",
    color: "#04BA56",
    src: "/language/reading/3.png",
    scale: 70,
    translateY: -5
  },
  {
    heading: "VOCAB 200",
    text: "Achieving a milestone of 200 essential words for effective communication and comprehension.",
    color: "#453A91",
    src: "/language/reading/4.png",
    scale: 150
  },
  {
    heading: "THINKING SKILLS",
    text: "Developing critical thinking and problem-solving abilities through advanced language exercises.",
    color: "#00ADEF",
    src: "/language/reading/5.png",
    scale: 80,
    translateY: -12
  },
  {
    heading: "BOOKLETS",
    text: "Reading and comprehending small books to reinforce language skills.",
    color: "#6C3A92",
    src: "/language/reading/6.png",
  },
  {
    heading: "LITERATURE & BOOK REVIEW",
    text: "Engaging deeply with literature, developing the ability to read critically and review books.",
    color: "#F10229",
    src: "/language/reading/7.png",
    translateY: -20,
    translateX: -5
  },
]

const Dots = () => {
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
    <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between">
      {Array.from({length: count}, (_, i) => (
        <div key={i} className={"bg-light-black size-2 rounded-full"} />
      ))}
    </div>
  )
}

export const LearningToRead = () => {
  return (
    <>
    <div className="relative hidden w-full h-screen lg:flex flex-col">
      <Dots />
      <div className="size-full flex z-10">
        {readingSteps.map(({heading, text, color, src, scale=100, translateY=0, translateX=0}, i) => (
          <div className={`relative flex-1 flex gap-4 justify-center items-center ${i % 2 === 0 ? "flex-col" : "flex-col-reverse"}`} key={i}>
            <div className="rounded-full scale-75 w-full aspect-square p-3 min-[1250px]:p-5" style={{backgroundColor: color}}>
              <div className="relative w-full aspect-square rounded-full bg-white">
                <img style={{transform: `translateX(calc(-50% + ${translateX}%)) translateY(calc(-50% + ${translateY}%)) scale(${scale}%) `}} src={src} alt="" className="absolute top-1/2 left-1/2" />
              </div>
            </div>
            <Bullet color={color} />
            <div className={`w-full aspect-square flex flex-col text-center text-sm xl:text-base ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <h4 className="font-bold text-lg xl:text-xl">{heading}</h4>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="lg:hidden flex flex-col gap-2 p-2">
      {readingSteps.map(({heading, text, src, color}, i) => 
        <div className="flex gap-4 items-center">
          <Bullet color={color} />
          <Card className="shadow-md p-6 flex gap-2 items-center">
            <div className="w-fit xs:w-20 sm:w-28 md:w-36 flex justify-center">
              <img src={src} alt="" className="h-24"/>
            </div>
            <div className={`flex-1 flex flex-col`}>
              <h4 className="font-bold text-lg">{heading}</h4>
              <p>{text}</p>
            </div>
          </Card>
        </div>
      )}
    </div>
    </>
  )
}
