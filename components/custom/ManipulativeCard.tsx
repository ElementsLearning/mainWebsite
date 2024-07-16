import { Manipulative } from "@/constants/MathsManipulativeContent"
import { SlidingDiv } from "./SlidingDiv"
import Link from "next/link"
import { IconButton } from "./IconButton"
import { ArrowRightIcon } from "@radix-ui/react-icons"

type ManipulativeCardProps = Manipulative & {
  index: number
}

export const ManipulativeCard: React.FC<ManipulativeCardProps> = ({name, src, color, innerColor, text, buyLink, index}) => {
  
  return (
    <SlidingDiv direction={"bottom"} delay={index*0.25} className="relative group/manipulative flex gap-4 items-center rounded-3xl rounded-bl-[96px] text-2xl rounded-tl-none" style={{backgroundColor: color}}>
      <Link href={buyLink} className="relative size-16 xs:size-24 sm:size-32 md:size-40 lg:size-48 rounded-full rounded-tl-none overflow-hidden p-4 sm:p-8 md:p-10 lg:p-12" style={{backgroundColor: innerColor}}>
        <img src={src} className="w-full"/>
        <div className="absolute top-0 text-white p-px xs:p-1 left-0 min-[700px]:hidden bg-black/10 size-3 xs:size-4 sm:size-6 xs:rounded-full rounded-tl-none xs:rounded-tl-none">
          <svg className="size-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-arrow-right</title><path d="M9,20A2,2 0 0,1 7,22A2,2 0 0,1 5,20A2,2 0 0,1 7,18A2,2 0 0,1 9,20M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18M7.2,14.63C7.19,14.67 7.19,14.71 7.2,14.75A0.25,0.25 0 0,0 7.45,15H19V17H7A2,2 0 0,1 5,15C5,14.65 5.07,14.31 5.24,14L6.6,11.59L3,4H1V2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,12C16.94,12.62 16.27,13 15.55,13H8.1L7.2,14.63M9,9.5H13V11.5L16,8.5L13,5.5V7.5H9V9.5Z" fill="currentColor"/></svg>
        </div>
      </Link>
      <p className="flex-1 text-[8px] leading-none xs:text-[10px] sm:text-sm md:text-base xl:text-lg"><strong>{name+": "}</strong>{text}</p>
      <Link href={buyLink} target="_blank" className="absolute hidden min-[700px]:block right-0 bottom-0" >
        <IconButton icon={<ArrowRightIcon className="size-full"/>} text={"Shop Now"} className={"font-bold text-white opacity-70 group-hover/manipulative:opacity-100 p-2 text-sm md:text-base lg:py-3 lg:text-2xl lg:p-4 rounded-3xl rounded-tr-none"} style={{backgroundColor: innerColor}}/>
      </Link>
    </SlidingDiv>
  )
}