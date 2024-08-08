import Marquee from "react-fast-marquee";

export const Clients = () => {
  return (
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
  )
}
