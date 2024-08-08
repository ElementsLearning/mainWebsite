"use client"
import { FAQSection } from "./FAQSection"
import { LinksSection } from "./LinksSection"
import { LocationSection } from "./LocationSection"
import { SubscribeSection } from "./SubscribeSection"

export const Footer = () => {

  return (
    <footer className="bg-[#353535] w-full p-4">
      <div className="border-b border-white w-full flex flex-col py-4 px-2 gap-4 sm:gap-12 sm:p-10 justify-center">        
        <div className="flex xl:flex-1 gap-12 flex-col xl:flex-row">
          <FAQSection />
          <LocationSection />
        </div>
        <div className="flex flex-col-reverse xl:flex-row flex-1 gap-4 xl:gap-8">
          <SubscribeSection />
          <LinksSection />
        </div>
      </div>
      <div className="text-white font-bold items-center flex justify-between py-2 xl:p-4 text-xs sm:text-sm md:text-base xl:text-lg">
        <p className="flex-1">Copyright 2011 © Elements Learning Pvt Ltd.</p>
        <p className="flex-1 text-right">Privacy Policy</p>
      </div>
    </footer>
  )
}
