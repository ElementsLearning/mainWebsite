import { FadeIn } from "@/components/custom/FadeIn"

export const ScienceContent = () => {

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          {/* <div className=" w-full h-52">
            <img className="" src="/media/WhatWeOffer/Science.png" alt="" />
          </div> */}
          <p>{"Allah invites us to contemplate His signs, which are manifested in the vastness of the horizons and the intricate details within ourselves. By observing and studying the world around us and the complexities within our own beings, we gain a deeper understanding of the Creator's design. Through the pursuit of knowledge and the study of science, we can witness the signs of Allah's wisdom and power, fostering a profound appreciation for the beauty and order embedded in the universe."}</p>
          <p>{`At Elements Learning, we love making science come alive through our hands-on approach, affectionately named "Science Tamasha." Instead of just talking about scientific ideas, we're inspired by top educators like Michael Faraday and Walter Lewin, creating engaging experiments that showcase the excitement of discovery. Science Tamasha encourages active participation, sparking curiosity and a passion for learning. Our mission is simple: to make science an exciting and unforgettable journey, helping students explore and marvel at the wonders of the natural world.`}</p>
          <p className="font-semibold">Coming Soon…</p>
          <div className="flex p-5 gap-10 justify-center">
            <div className="bg-neutral-500 w-72 aspect-square"></div>
            <div className="bg-neutral-500 w-72 aspect-square"></div>
            <div className="bg-neutral-500 w-72 aspect-square"></div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
