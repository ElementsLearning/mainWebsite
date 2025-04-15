import { SlidingDiv } from "@/components/custom/SlidingDiv";

export const VideoSection = () => {

  return (
    <>
    <SlidingDiv direction="left" px={50} className="w-full relative md:w-auto md:h-48 aspect-video bg-neutral-200 rounded-lg overflow-hidden">
      <video className={"size-full"} controls>
        <source src={"/video/marketing_video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </SlidingDiv>
    <SlidingDiv direction="right" px={50} className="flex-1">
      <p className="text-xs xs:text-sm sm:text-base">{"At Elements Learning, we are on a mission to eliminate students' anxiety about math and studies by revolutionizing how they learn. Our innovative Maths Lab, hands-on activities, and engaging manipulatives transform abstract concepts into tangible experiences. By making learning interactive and fun, we empower students to approach their education with confidence and enthusiasm, turning challenges into exciting opportunities for growth."}</p>
    </SlidingDiv>
    </>
  )
}
