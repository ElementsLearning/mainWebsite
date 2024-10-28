"use client"
import { Clients } from "@/components/custom/Clients";
import { Partners } from "@/components/custom/Partners";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { StaggeredHeaders } from "@/components/custom/StaggeredHeaders";
import { VideoPlayer } from "@/components/custom/VideoPlayer";
import { Footer } from "@/components/pages/Footer/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { goals } from "@/constants/goals";
import { team } from "@/constants/team";
import { GoalCard } from "./GoalCard";
import { TeamCard } from "./TeamCard";

export default function About() {
  return (
    <div className="flex flex-col w-screen overflow-hidden">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center">
        <StaggeredHeaders headers={["About Us"]} containerClass="text-3xl min-[400px] text-4xl sm:text-6xl lg:text-9xl font-bold" direction="left" />
        <div className="max-w-[200px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[600px]">
          <VideoPlayer src="/animations/aboutUs.mp4" className="size-full" />
        </div>
      </section>
      <section id="prospects" className="relative w-full overflow-hidden">
        <img src="/aboutpage/hero.jpg" alt="" className="w-full max-h-screen"/>
        <div className="absolute grid px-4 xs:p-2 min-[500px]:p-5 md:p-10 lg:p-14 text-white min-[500px]:grid-cols-2 grid-rows-2 inset-0 bg-black/75">
          <SlidingDiv direction={"right"} className="flex flex-col md:gap-4 text-right min-[500px]:col-start-2 justify-center size-full">
            <h2 className="text-sm xs:text-lg min-[500px]:text-2xl md:text-3xl lg:text-6xl uppercase font-bold" >Our Mission</h2>
            <p className="text-[10px] leading-none sm:text-[14px] md:text-sm lg:text-lg xl:text-xl">Our mission is to deliver top-tier, affordable K-12 educational solutions that equip learners with the knowledge, skills, and values necessary to excel in the 21st century. We strive to utilize the finest global resources and innovative teaching methods to provide a comprehensive, engaging, and locally relevant educational experience. Our commitment extends to enhancing teacher capabilities, fostering a culture of continuous feedback, and promoting the spirit of self-learning.</p>
          </SlidingDiv>
          <SlidingDiv direction={"left"} className="flex flex-col md:gap-4 text-left row-start-2 justify-center size-full">
            <h2 className="text-sm xs:text-lg min-[500px]:text-2xl md:text-3xl lg:text-6xl uppercase font-bold"  >Our Vision</h2>
            <p className="text-[10px] leading-none sm:text-[14px] md:text-sm lg:text-lg xl:text-xl">To reinvent K-12 education into a system that creates a nurturing environment for curiosity, creativity, and critical thinking, enabling every child to reach their full potential, understand themselves, and play a positive role in the larger community, paving the way for a brighter future for all.</p>
          </SlidingDiv>
        </div>
      </section>
      <section id="goals" className="flex flex-col gap-8 px-4 py-6 lg:py-10 lg:px-20">
        <h3 className="px-4  text-3xl min-[900px]:text-5xl text-center font-bold uppercase">Our Goals</h3>
        <div className="flex flex-col md:items-start items-center h-full md:flex-row gap-4 md:gap-4 lg:gap-8 xs:p-6 lg:px-0 justify-center">
          {goals.map((goal, index) => <GoalCard key={goal.title} {...goal} index={index} />)}
        </div>
      </section>
      <section id="team" className="bg-[#F3EEE8] px-4 py-6 sm:px-10 lg:py-10 lg:px-20 xl:py-16 xl:px-32 flex flex-col lg:flex-row gap-12 lg:gap-20 justify-center items-start">
        <div className="rounded-md flex flex-col md:flex-row lg:flex-col gap-12 xs:gap-8 md:gap-8 justify-end items-end">
          <div className="max-w-96">
            <VideoPlayer src="/animations/team.mp4" className="size-full" />
            {/* <img src="/landingpage/services.png" alt="" /> */}
          </div>
          
          <SlidingDiv direction="bottom" repeat={true} className="flex flex-col xl:gap-2 max-w-96 xl:text-right">
            <h2 className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">Meet our Team</h2>
            <p className="text-base md:text-xl lg:text-xl xl:text-2xl">Meet our dedicated team of education experts and innovators, committed to revolutionizing K-12 education through research-based practices and accessible resources.</p>
          </SlidingDiv>
        </div>
        <ScrollArea className="sm:flex-1 pr-3 md:pr-5 md:flex-auto h-96 lg:h-[600px] lg:flex-1">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 lg:grid-cols-2 min-[1100px]:grid-cols-3 flex-col">
            {team.map(member => <TeamCard key={member.name} {...member} />)}
          </div>
        </ScrollArea>
      </section>
      <Partners />
      <Clients />      
      <Footer />
    </div>
  )
}
