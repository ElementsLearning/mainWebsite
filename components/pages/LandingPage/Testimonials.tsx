import { CarouselSingle } from "@/components/custom/CarouselSingle"
import { HexagonPlayButton } from "@/components/custom/HexagonPlayButton"
import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { StaggeredHeaders } from "@/components/custom/StaggeredHeaders"
import { Testimonial, testimonials } from "@/constants/testimonias"
import { useEffect, useState } from "react"

const TestimonialCard: React.FC<Testimonial & {animating: boolean}> = ({quote, person, animating}) => {

  return (
    <div className={`bg-[#F3EEE8] flex flex-col justify-center px-6 sm:px-10 lg:px-16 gap-2 rounded-xl md:rounded-3xl md:rounded-bl-none rounded-bl-none text-xs md:text-base lg:text-lg md:max-w-[400px] lg:max-w-[600px] py-4 xs:py-2 min-h-72 xs:min-h-64 min-[550px]:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] transition-all duration-500 ${animating ? "-translate-x-4" : "translate-x-0"}`}>
      <svg className={`size-4 lg:size-10 transition-all duration-500 ${animating ? "opacity-0" : "opacity-100"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-quote-open</title><path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" fill="currentColor"/></svg>
      <div className={`flex flex-col gap-4 lg:gap-8 text-xs md:text-sm lg:text-base transition-all duration-500 ${animating ? "opacity-0" : "opacity-100"}`}>
        <p>{quote}</p>
        <p className="font-bold">{person}</p>
      </div>
    </div>
  )
}

export const Testimonials = () => {

  const [index, setIndex] = useState(0)
  const [indexChanged, setIndexChanged] = useState(false)

  useEffect(() => {
    if (indexChanged) {
      setTimeout(() => setIndexChanged(false), 500 )
    }
  }, [indexChanged])

  return (
    <>
    <div className="flex min-[550px]:flex-col gap-2 items-end justify-center">
      <div className="w-32 sm:w-40 md:w-48 lg:w-72">
        <img src="landingpage/testimonials.png" alt="" />
      </div>
      <StaggeredHeaders headers={["What", "Others", "Say About Us"]} direction="bottom" px={20} containerClass="flex flex-col text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase min-[550px]:text-right sm:items-end" />
    </div>
    <div className="relative flex flex-col justify-center">
      <div className={`absolute top-1/2 right-0 -translate-y-1/2 size-10 lg:size-16 z-10 transition-all duration-500 ${indexChanged ? "translate-x-full" : "translate-x-1/2"}`}>
        <SlidingDiv direction="right" px={20} threshold={0.1}>
          <button className="size-full" onClick={() => {setIndexChanged(true); setTimeout(() => setIndex((index+1)%testimonials.length), 500)}}>
            <HexagonPlayButton outerColor="#FABB41" />
          </button>
        </SlidingDiv>
      </div>
      <SlidingDiv direction="top" px={50} threshold={0.7}>
        <TestimonialCard animating={indexChanged} {...testimonials[index]} />
      </SlidingDiv>
    </div>
    </>
  )
}