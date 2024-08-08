
export const Partners = () => {
  return (
    <section className="flex flex-col gap-4 md:gap-8 px-4 py-6 lg:py-10 lg:px-20">
      <h3 className="px-4  text-2xl min-[900px]:text-4xl text-center font-bold uppercase">Our Partners</h3>
      <div className="flex gap-2 sm:gap-8 md:gap-12 xl:gap-20 justify-center items-center">
        <img src="/partners/nust.jpg" alt="" className="h-[52px] xs:h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48" />
        <img src="/partners/cef.png" alt="" className="h-[52px] xs:h-16 sm:h-20 md:h-24 lg:h-28 xl:h-40" />
        <img src="/partners/sada.png" alt="" className="h-[52px] xs:h-16 sm:h-20 md:h-24 lg:h-32 xl:h-48" />
      </div>
    </section>
  )
}
