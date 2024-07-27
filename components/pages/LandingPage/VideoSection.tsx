import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { useState } from "react";

export const VideoSection = () => {
  const [fullScreen, setFullScreen] = useState(false)
  return (
    <>
    {fullScreen && 
    <div style={{zIndex: 101}} onClick={(e) => {setFullScreen(false)}} className="fixed inset-0 bg-black/80 flex justify-center items-center p-4 sm:p-8 lg:p-12">
      <iframe className="size-full" src="https://www.youtube.com/embed/5Ipiy4HV2nQ?si=8VwXHvmwCTF499Cv" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>}
    <SlidingDiv direction="left" px={50} className="w-full relative md:w-auto md:h-48 aspect-video bg-neutral-200 rounded-lg overflow-hidden">
      <iframe className="size-full" src="https://www.youtube.com/embed/5Ipiy4HV2nQ?si=8VwXHvmwCTF499Cv" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <div className="absolute inset-0 z-10" onClick={(e) => {e.stopPropagation(); setFullScreen(true)}}/>
    </SlidingDiv>
    <SlidingDiv direction="right" px={50} className="flex-1">
      <p className="text-xs xs:text-sm sm:text-base">{"At Elements Learning, we are on a mission to eliminate students' anxiety about math and studies by revolutionizing how they learn. Our innovative Maths Lab, hands-on activities, and engaging manipulatives transform abstract concepts into tangible experiences. By making learning interactive and fun, we empower students to approach their education with confidence and enthusiasm, turning challenges into exciting opportunities for growth."}</p>
    </SlidingDiv>
    </>
  )
}
