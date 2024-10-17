import Link from "next/link"

export const LinksSection = () => {

  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white">Links</div>
      <div className="flex-1 grid text-sm md:text-base px-4 sm:px-10 grid-cols-2 sm:grid-cols-4 gap-2 gap-y-4 text-white">
        <div className="flex-1 flex flex-col gap-2">
          <Link href={"/about"} className="font-bold text-lg sm:pb-6 hover:underline">About Us</Link>
          <Link className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} href={"/about#prospects"}>Our Vision</Link>
          <Link className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} href={"/about#prospects"}>Our Mission</Link>
          <Link className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} href={"/about#goals"}>Our Goals</Link>
          <Link className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} href={"/about#team"}>Our Team</Link>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <Link  href={"/services"} className="font-bold text-lg sm:pb-6 hover:underline">Services</Link>
          <Link className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "}   href={"/services/maths/publications"}>Maths</Link>
          <Link className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "}  href={"/services/science"}>Science</Link>
          <Link className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "}  href={"/services/language"}>Language</Link>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1  className="font-bold text-lg sm:pb-6 hover:underline cursor-pointer">Our Shop</h1>
          <p className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight cursor-pointer"} >Tangram</p>
          <p className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight cursor-pointer"} >Geoboard</p>
          <p className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight cursor-pointer"} >Base 10 Blocks</p>
          <p className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight cursor-pointer"} >Fraction Board</p>
          <p className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight cursor-pointer"} >Circular Geoboard</p>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <Link href={"/contact"} className="font-bold text-lg sm:pb-6 hover:underline">Contact Us</Link>
          <Link className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} href={"/contact#info"}>Details</Link>
          <Link className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} href={"/contact#form"}>Contact Form</Link>
          <Link className={"hover:text-white text-neutral-300 sm:h-10 md:h-auto xl:h-10 leading-tight "} href={"/contact#location"}>Location</Link>
        </div>
      </div>
    </div>
  )
}
