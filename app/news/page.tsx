"use client"

import { StaggeredHeaders } from "@/components/custom/StaggeredHeaders";
import { Footer } from "@/components/pages/Footer/Footer";
import { news } from "@/constants/news";
import { updates } from "@/constants/update";
import { UpdateCard } from "./UpdateCard";
import { NewsCard } from "./NewsCard";
import { CarouselWithIndicators } from "@/components/custom/CarouselWithIndicators";
import { VideoPlayer } from "@/components/custom/VideoPlayer";


export default function News() {

  return (   
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 xs:px-10 md:px-20 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center">
        <StaggeredHeaders headers={["News", "&", "Updates"]} containerClass="text-3xl min-[400px]:block hidden text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold" direction="left" />
        <StaggeredHeaders headers={["News & Updates"]} containerClass="text-3xl min-[400px]:hidden text-4xl sm:text-6xl lg:text-9xl font-bold" direction="left" />
        <div className="max-w-[200px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[600px]">
          <VideoPlayer src={"/animations/news.mp4"} className="size-full" />
          {/* <img src="/newsandupdatespage/newsandupdates.png" alt="" /> */}
        </div>
      </section>
      <section className="flex flex-col p-4 md:px-8 lg:p-12 xl:p-20">
        <h3 className="px-4 text-3xl min-[900px]:text-5xl text-left font-bold uppercase">Updates</h3>
        <div className="p-8 lg:p-4">
          <CarouselWithIndicators 
          itemClassName="sm:basis-1/2 lg:basis-1/3 flex justify-center" 
          contentClassName="" 
          indicatorClassName="md:hidden"
          items={updates.map((update) => <UpdateCard key={update.title} {...update} />)}
          />
        </div>
      </section>
      <section className="bg-[#F3EEE8] p-6 xs:p-8 md:p-16 lg:p-20 flex flex-col gap-8">
        <h3 className="px-4 text-3xl min-[900px]:text-5xl text-left font-bold uppercase">News</h3>
        {news.map(newss => <NewsCard key={newss.title} {...newss} />)}        
      </section>
      <section className="flex flex-col items-center">
        <div className="flex bg-[#FBBA42] translate-y-1/4 w-4/5 flex-col p-5 lg:p-12 justify-center items-center gap-8">
          <div className="flex flex-col text-lg gap-1 items-center">
            <h4 className="font-bold text-lg md:text-2xl lg:text-4xl">Join Our Community</h4>
            <p className="text-sm md:text-base" >Sign up for our newsletter and get fresh articles, freebies, advice and more 3 times a week.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 lg:gap-4 justify-center lg:p-2 lg:px-16 w-full">
            <input type="text" placeholder="Full Name" className="flex-1 px-2 p-2 text-sm" />
            <input type="text" placeholder="Email" className="flex-1 px-2 p-2 text-sm" />
            <button className="p-2 lg:p-2 bg-[#404040] text-white font-bold px-4 text-sm">Submit</button>
          </div>
        </div>
        <div className="bg-[#353535] h-20 md:h-16 lg:h-20 w-full"></div>
      </section>
      <Footer />
    </div>
  )
}