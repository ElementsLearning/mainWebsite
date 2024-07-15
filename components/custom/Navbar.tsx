"use client"

import Link from "next/link"
import { useState } from "react"

const tailwindClasses = ["top-0", "right-0", "bottom-0", "left-0"]

type NavOptionProps = {
  text: string
  link: string
  children?: React.ReactNode
  clamp?: "left" | "right" | "top" | "bottom"
}

const LinkClassName = `transition-colors duration-500 border-b-2 hover:border-[#FBBA41] border-transparent`

const NavOption: React.FC<NavOptionProps> = ({text, link, children, clamp="left"}) => {
  if (!children) {
    return (
      <Link href={link} className={LinkClassName}>{text}</Link>
    )
  } else {
    return (
      <div className="relative group p-1">
        <div className="flex items-center">
          <Link href={link} className={LinkClassName}>{text}</Link>
          <svg className="size-5 group-hover:rotate-90 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,17L15,12L10,7V17Z" fill="currentColor"/></svg>
        </div>
        <div className={`absolute flex flex-col items-start gap-2 translate-y-full overflow-hidden text-nowrap ${clamp}-0 bottom-0 h-0 w-0 group-hover:w-48 group-hover:h-fit group-hover:p-4 bg-white transition-all duration-300 shadow-md rounded-lg border`}>
          {children}
        </div>
      </div>
    )
  }
}


export const Navbar = () => {

  const [opened, setOpened] = useState(false)

  return (
    <>
    <nav className="hidden min-[700px]:flex w-full justify-center py-4 px-10 xl:px-20 border-b-2 border-[#FABF23]">
      <div className="w-full flex justify-between items-center text-sm lg:text-base ">
        <Link href={"/"} className="flex gap-2">
          <img src="/logo.png" className="h-12 sm:h-8 md:h-12" alt="" />
        </Link>
        <div className="flex gap-2 xl:gap-10 items-center">
          <NavOption text="About Us" link="/about">
            <Link href="/about#prospects" className={`transition-colors duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Mission & Vision</Link>
            <Link href="/about#team" className={`transition-colors duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Our Team</Link>
          </NavOption>
          <NavOption text="What We Offer" link="/services">
            <Link href="/services/ece" className={`transition-colors duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>ECE</Link>
            <Link href="/services/maths?tab=publications" className={`transition-colors duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Maths</Link>
            <Link href="/services/language" className={`transition-colors duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Language</Link>
            <Link href="/services/socialscience" className={`transition-colors duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Social Science</Link>
            <Link href="/services/science" className={`transition-colors duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Science</Link>
            <Link href="/services/steam" className={`transition-colors duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>STEAM</Link>
            <Link href="/services/edtech" className={`transition-colors duration-500 border-b-2 border-transparent hover:border-[#FBBA41] w-full`}>Ed Tech</Link>
          </NavOption>
          <NavOption text="Blogs" link="/blogs" />
          <NavOption text="News & Updates" link="/news" />
          <NavOption text="Contact Us" link="/contact" />
        </div>
      </div>
    </nav>
    {/* Mobile Navbar */}
    <nav className="flex min-[700px]:hidden flex-col gap-2 w-full justify-center py-4 px-10 xl:px-20 border-b-2 border-[#FABF23]">
      <div className="w-full flex justify-between items-center text-sm lg:text-base ">
        <Link href={"/"} className="flex gap-2">
          <img src="/logo.png" className="h-8 md:h-12" alt="" />
        </Link>
        <div className="relative group">
          <button className="size-6 flex flex-col justify-around" onClick={() => setOpened(!opened)}>
            <span className={`w-full transition-transform duration-200 p-px bg-black ${opened ? "rotate-45 translate-y-2" : "transform-none"}`}></span>
            <span className={`w-full p-px bg-black ${opened ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`w-full transition-transform duration-200 p-px bg-black ${opened ? "-rotate-45 -translate-y-2" : "transform-none"}`}></span>
          </button>
        </div>
      </div>
      <div className={`w-full transition-all duration-300 overflow-hidden ${opened ? "h-64" : "h-0"}`}>
        <div onClick={() => setOpened(false)} className="flex flex-col h-full text-xl gap-4 xl:gap-10 justify-center items-start">
          <Link href="/about" className={`border-b-2 border-[#FBBA41]`}>About Us</Link>
          <Link href="/services" className={`border-b-2 border-[#FBBA41]`}>What we Offer</Link>
          <Link href="/blogs" className={`border-b-2 border-[#FBBA41]`}>Blogs</Link>
          <Link href="/news" className={`border-b-2 border-[#FBBA41]`}>News & Updates</Link>
          <Link href="/contact" className={`border-b-2 border-[#FBBA41]`}>Contact Us</Link>
        </div>
      </div>
    </nav>
    </>
  )
}