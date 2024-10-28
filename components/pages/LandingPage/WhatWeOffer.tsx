import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { IconButton } from "@/components/custom/IconButton"
import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { VideoPlayer } from "@/components/custom/VideoPlayer"
import { services } from "@/constants/services"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"


export const WhatWeOffer = () => {

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-12 lg:gap-20">

        <div className="rounded-md flex-1 flex flex-col sm:flex-row lg:flex-col gap-12 sm:gap-8 justify-end items-end">
          <div className="max-w-[400px]">
            <VideoPlayer src="/animations/services.mp4" className="size-full" />

            {/* <img src="/landingpage/services.png" alt="" /> */}
          </div>
          
          <SlidingDiv direction="bottom" repeat={true} className="flex flex-col xl:gap-2 max-w-[550px] xl:text-right">
            <h2 className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">What we offer</h2>
            <p className="text-base md:text-xl lg:text-xl xl:tet-2xl">Transforming education at every level, Elements Learning offers holistic solutions for K-12 success. Leveraging the NUST ecosystem, we are merging experience with innovation to shape future leaders.</p>
          </SlidingDiv>
        </div>
        <CustomAccordion changeHeaders={true} containerClass={"flex-1"} items={services.map(service => ({
          title: service.title,
          id: service.title,
          disabled: service.disabled,
          content: (
            <div className={`flex justify-start gap-2 p-2`}>
              <div className="w-24 sm:p-4 xs:w-32 sm:w-40 md:w-48 lg:w-32 xl:w-64">
                {service.videoSrc ?
                <VideoPlayer controls={false} webkit-playsinline="true" src={service.videoSrc} className="w-full"/> 
                : <img src={service.illustrationSrc} className="w-full h-fit" />}
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start">
              <p className="text-xs sm:text-base md:text-lg lg:text-sm xl:text-base">
                {service.content}
              </p>  
              <Link href={service.disabled ? "" : service.link}>
                <IconButton icon={<ArrowRightIcon className="size-full"/>} text={"Learn More"} className={`font-bold text-sm sm:text-lg p-2 sm:p-2 ${service.disabled ? "bg-gray-300 text-gray-600" : "bg-[#353535] text-[#FBBA41]"}`} />
              </Link>
              </div>
            </div>
          )
        }))} />
      </div>
    </>
  )
}