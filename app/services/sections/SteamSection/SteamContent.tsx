import { FadeIn } from "@/components/custom/FadeIn"

export const SteamContent = () => {

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>{`At Elements Learning (EL), we believe in cultivating a seamless learning experience through what we term "Connected Learning" instead of STEAM. Our goal is to shape solid frameworks of history and geography in a child's mind, allowing them to relate acquired knowledge to real-life contexts. We guide their educational journey through key stages: from understanding concepts like "Before Time" and "Space and Time" to fundamental notions like "Setting Up Home" and the intricacies of "Life." As their knowledge evolves, we explore "Civilizations," the nuanced "Islamic Ebb and Flow," and the transformative "Industrial Age." Our educational narrative concludes with "Free and Reshaping," paving the way for an open-ended exploration into the future. This approach empowers students to see the interconnected nature of historical and geographical elements, fostering a holistic understanding of the world.`}</p>
          {/* <div className="bg-neutral-500 w-full h-52">
            <img className="" src="/media/WhatWeOffer/Steam.png" alt="" />
          </div> */}
        </div>
      </div>
    </FadeIn>
  )
}
