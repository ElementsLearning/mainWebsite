"use client"
import { Clients } from "@/components/custom/Clients";
import { MultiCarousel } from "@/components/custom/MultiCarousel";
import { Partners } from "@/components/custom/Partners";
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

      <Partners />

      <Clients />      

      <ScrollToView className="bg-[#F3EEE8] w-full p-4 sm:p-8 lg:p-12 md:min-h-screen md:flex md:flex-col md:justify-center">
        <MultiCarousel items={LandingPageEvents} />
      </ScrollToView>

      <section className="w-full p-6 sm:p-10 flex flex-col justify-center xs:items-start min-[550px]:flex-row min-[550px]:items-center sm:gap-8 gap-4">
        <Testimonials />
      </section>

      <Footer />
    </div>
  );
}
