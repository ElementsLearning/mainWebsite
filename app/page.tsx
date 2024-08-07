"use client"
import { MultiCarousel } from "@/components/custom/MultiCarousel";
import { ScrollToView } from "@/components/custom/ScrollToView";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { Footer } from "@/components/pages/Footer/Footer";
import { Hero } from "@/components/pages/LandingPage/Hero";
import { OurJourney } from "@/components/pages/LandingPage/OurJourney";
import { OurJourneyMobile } from "@/components/pages/LandingPage/OurJourneyMobile";
import { Pillars } from "@/components/pages/LandingPage/Pillars";
import { PuzzlePieces } from "@/components/pages/LandingPage/PuzzlePieces";
import { Stats } from "@/components/pages/LandingPage/Stats";
import { Testimonials } from "@/components/pages/LandingPage/Testimonials";
import { VideoSection } from "@/components/pages/LandingPage/VideoSection";
import { WhatWeOffer } from "@/components/pages/LandingPage/WhatWeOffer";
import { LandingPageEvents } from "@/constants/LandingPageEvents";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden items-center">
      <section className="bg-[#F3EEE8] w-full justify-between flex md:px-10 xl:px-20">
        <Hero />
      </section>

      <ScrollToView className="w-full relative py-4 min-h-screen">
        <SlidingDiv className="min-[1100px]:absolute lg:top-8 right-0 left-0" direction={"right"} px={75}>
          <h3 className="px-4 text-3xl min-[900px]:text-5xl min-[900px]:text-center font-bold uppercase">Our Journey</h3>
        </SlidingDiv>
        <OurJourney />
        <OurJourneyMobile />
      </ScrollToView>

      <section className="w-full bg-[#F3EEE8]">
        <PuzzlePieces />
      </section>
      
      <ScrollToView className="flex p-4 xs:px-10 sm:px-20 gap-12 md:gap-16 flex-col justify-center min-h-screen">
        <Pillars />
      </ScrollToView>

      <ScrollToView className="bg-[#F3EEE8] p-8 sm:p-10 lg:p-20 w-full min-h-screen flex flex-col justify-center" >
        <WhatWeOffer />
      </ScrollToView> 

      <section className="flex gap-2 md:gap-8 lg:px-32 xl:px-40 md:p-10 p-4 xs:p-6 items-center flex-col md:flex-row">
        <VideoSection />  
      </section> 

      <section className="bg-[#F3EEE8] w-full grid grid-cols-2 gap-8 p-8 sm:flex xs:p-12 md:px-32 lg:px-48 md:gap-9 lg:gap-16 justify-between">
        <Stats />
      </section>

      <section className="w-full p-2"></section>

      <ScrollToView className="bg-[#F3EEE8] w-full p-4 sm:p-8 lg:p-12 md:min-h-screen md:flex md:flex-col md:justify-center">
        <MultiCarousel items={LandingPageEvents} />
      </ScrollToView>

      <section className="w-full p-6 sm:p-10 flex flex-col justify-center xs:items-start min-[550px]:flex-row min-[550px]:items-center sm:gap-8 gap-4">
        <Testimonials />
      </section>

      <section className="flex flex-col gap-4 md:gap-8 px-4 py-6 lg:py-10 lg:px-20">
        <h3 className="px-4  text-2xl min-[900px]:text-4xl text-center font-bold uppercase">Our Partners</h3>
        <div className="flex gap-4 sm:gap-8 md:gap-12 xl:gap-20 justify-center items-center">
          <img src="/partners/NustLogo.jpg" alt="" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48" />
          <img src="/partners/cef.png" alt="" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-40" />
        </div>
      </section>

      <section className="gap-4 md:gap-12 px-4 py-6 lg:py-10 lg:px-2 w-full flex flex-col">
        <h3 className="px-4  text-2xl min-[900px]:text-4xl text-center font-bold uppercase">Our Clients</h3>
        <Marquee>
          <div className="w-24 sm:w-44 md:64 lg:w-72  flex justify-center">
            <img src="/clients/sliveroaks.jpg" alt="" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48" />
          </div>
          <div className="w-24 sm:w-44 md:64 lg:w-72  flex justify-center">
            <img src="/clients/aps.jpg" alt="" className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48 scale-[80%]" />
          </div>
          <div className="w-24 sm:w-44 md:64 lg:w-72  flex justify-center">
            <img src="/clients/fgel.jpg" alt="" className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48" />
          </div>
          <div className="w-24 sm:w-44 md:64 lg:w-72  flex justify-center">
            <img src="/clients/Fde.jpg" alt="" className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48 scale-[80%]" />
          </div>
          <div className="w-full flex justify-center">
            <img src="/clients/read.png" alt="" className="h-16 sm:h-20 md:h-24 lg:h-30 xl:h-48" />
          </div>
        </Marquee>
      </section>
      <Footer />
    </div>
  );
}
