import { ArrowRightIcon, ChevronUpIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"

import { CalendarIcon } from "lucide-react"
import { CarouselSingle } from "./CarouselSingle"
import { Event } from "@/constants/LandingPageEvents"
import { HexagonPlayButton } from "./HexagonPlayButton"
import { useOnEscape } from "@/lib/hooks/useOnEscape"

type MultiCarouselProps = {
  items: Event[]
  autoScroll?: boolean
  delay?: number
}

export const MultiCarousel: React.FC<MultiCarouselProps> = ({items, autoScroll=true, delay=3000}) => {

  const [index, setIndex] = useState(0)
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>()
  const [size, setSize] = useState(200)
  const [gapSize, setGapSize] = useState(5)
  const [paused, setPaused] = useState(false)

  const [opened, setOpened] = useState(false)
  useOnEscape(() => setOpened(false))
  const smallerSize = size * 0.75

  useEffect(() => {

    const resetSize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth >= 1280) {
        setSize(650)
        setGapSize(20)
      } else if (windowWidth >= 1024) {
        setSize(400)
        setGapSize(15)
      } else if (windowWidth >= 768) {
        setSize(350)
        setGapSize(12)
      } else if (windowWidth >= 640) {
        setSize(300)
        setGapSize(10)
      }
    }

    window.addEventListener("resize", resetSize)
    resetSize()

    return () => window.removeEventListener("resize", resetSize)
  }, [])

  useEffect(() => {

    if (paused || !autoScroll || opened) {
      clearInterval(intervalID)
    } else {
      const id = setInterval(() => setIndex(i => (i+1)%items.length), delay)
      setIntervalID(id)
      return () => clearInterval(id)
    }

  }, [opened, paused, autoScroll])


  return (
    <>
    {opened && <div onClick={() => setOpened(false)} className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
      <div className="w-11/12 md:w-10/12 lg:w-3/4 ">
        <CarouselSingle containerClass={"size-full aspect-[3/2]"} 
        items={items[index].gallery.map((src) => 
          <div key={src} className="size-full flex flex-col justify-center">
            <img onClick={(e) => e.stopPropagation()} src={src} alt="" className="w-full bg-neutral-400" />
          </div>
        )}
        nextButton={
          <div className="size-7 sm:size-10 md:size-12 lg:size-16">
            <HexagonPlayButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"}/>
          </div>
        }
        prevButton={
          <div className="size-7 sm:size-10 md:size-12 lg:size-16 rotate-180">
            <HexagonPlayButton outerColor={"#FCBA42"} innerColor={"#FFFFFF"}/>
          </div>
        }
        delay={2000} />
      </div>
    </div>}
    <div className="relative w-full flex overflow-hidden justify-center items-center gap-8" 
    style={{height: size}}>
      <div className="absolute flex flex-col justify-between transition-transform duration-500 text-xs xs:text-sm md:text-lg lg:text-xl xl:text-2xl" 
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      style={{
        backgroundColor: items[index].color, 
        color: "#FFFFFF", 
        width: size, height: size, 
        paddingRight: 0, 
        paddingLeft: size/8, 
        paddingTop: size/8, 
        paddingBottom: size/7, 
        borderRadius: `${size/12}px ${size/12}px 0px ${size/12}px`
      }}>
        <p className="font-bold drop-shadow-md">
          {items[index].name}
        </p>
        {items[index].additional && 
        <div style={{paddingRight: size/8}} className="md:flex hidden flex-col gap-2 text-light-black font-semibold text-xl">
          <div className="flex gap-2 justify-center items-centers">
            <CalendarIcon className="size-6" />
            <p className="">{items[index].additional.date}</p>
          </div>
          {items[index].additional.desc && <p className="text-center">{items[index].additional.desc}</p>}
        </div>}
      </div>
      <div className="relative z-10 h-1/2 sm:-translate-y-[8%]" style={{width: smallerSize}}>
        {items.map((item, i) => (
          <div key={item.name} className={`absolute transition-all duration-700 bottom-0 ${i === index ? "h-full w-full" : "h-2/3 w-2/3 grayscale blur-[1px]"}`} 
          style={{backgroundColor: item.innerColor, transform: `${index > i ? `translateX(calc(${100*1/2}% + ${(index-i) * (smallerSize*(2/3) + gapSize)}px))` : `translateX(${(index-i) * (smallerSize*(2/3) + gapSize) }px)`}`}}
          onClick={() => (i === index) ? setOpened(true) : setIndex(i)}
          >
            <div className={`relative overflow-hidden size-full shadow-lg ${i === index ? "group" : ""}`}>
              {!item.src.includes(".mp4") && <img src={item.src} alt="" className="size-full shadow-lg" />}
              {item.src.includes(".mp4") &&
              <video className={"size-full"} controls>
                <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>}
              {item.gallery.length > 0 &&
              <div className="absolute hidden md:flex inset-0 overflow-hidden bg-black/75 translate-y-full group-hover:translate-y-0 transition-all duration-300 flex-col justify-end xs:p-1 sm:p-2 md:p-3 lg:p-4 xl:p-6 xs:gap-1 md:gap-2">
                <div className="text-[#FCBA42] font-bold text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl flex lg:gap-1 items-center">
                  <p><span className="hidden md:inline-block">Click to</span> View More</p>
                  <ArrowRightIcon className="size-2 md:size-4" />
                </div>
                <div className="flex justify-between gap-2 h-1/5 w-full">
                  {item.gallery.map(src => 
                    <img key={src} src={src} className="" />
                  )}
                </div>
              </div>}
            </div>
          </div>
        ))}
        <div className="absolute right-0 md:hidden bottom-0 translate-y-full flex justify-center items-center gap-1">
          <ChevronUpIcon className="size-3 md:size-4" />
          <p style={{color: "#2a2a2a"}} className="drop-shadow-xl text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">View More</p>
        </div>
      </div>
    </div>
    </>
  )
}
