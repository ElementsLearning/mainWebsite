"use client"

import { ChevronLeft, ChevronRight, ImagePlus } from "lucide-react"

import { Button } from "../ui/button"
import { ShopItemType } from "@/constants/Shop/shopItems"
import { SlidingDiv } from "../custom/SlidingDiv"
import { useState } from "react"

type ItemCardProps = ShopItemType & {
  index: number
  quantity: number
  updateQuantity: (quantity: number) => void
}

export const ItemCard: React.FC<ItemCardProps> = ({description, name, price, quantity, src, updateQuantity, index, color, innerColor, images}) => {

  const [open, setOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  
  return (
    <>
    {open && 
    <div onClick={() => {setOpen(false); setImageIndex(0)}} className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center">
      <div onClick={(e) => e.stopPropagation()} className="flex items-center gap-1">
        <Button disabled={imageIndex === 0} onClick={() => setImageIndex(Math.max(imageIndex - 1, 0))} size={"icon"} className="text-white" variant={'ghost'}>
          <ChevronLeft className="size-4 sm:size-8" />
        </Button>
        <img src={`/shop/${images[imageIndex]}`} className={`${imageIndex === 0 ? "max-w-[85vw]" : "w-[85vw] sm:w-[90vw]"} max-h-[90vh] bg-black rounded-md p-2`} />
        <Button disabled={imageIndex === images.length - 1} onClick={() => setImageIndex(Math.min(imageIndex + 1, images.length - 1))} size={"icon"} className="text-white" variant={'ghost'}>
          <ChevronRight className="size-4 sm:size-8" />
        </Button>
      </div>
    </div>
    }
    <SlidingDiv direction={"bottom"} delay={index*0.25} className="relative flex group/manipulative items-center rounded-md overflow-hidden gap-2 md:gap-4 md:rounded-3xl md:rounded-bl-[96px] md:text-2xl md:rounded-tl-none" style={{backgroundColor: color}}>
      <div onClick={() => setOpen(true)} className="relative size-16 xs:size-24 sm:size-32 md:size-40 lg:size-48 md:rounded-full md:rounded-tl-none overflow-hidden p-4 sm:p-8 md:p-10 lg:p-12" style={{backgroundColor: innerColor}}>
        <img src={src} className="w-full"/>
        <ImagePlus className="size-3 md:size-6 lg:size-8 absolute top-1 right-1 md:left-2 md:top-2 text-white" />
      </div>
      <p className="flex-1 text-[8px] xs:text-[9px] min-[450px]:text-[10px] leading-none sm:text-xs md:text-base xl:text-lg"><strong className="xs:text-[10px] min-[450px]:text-sm sm:text-base">{name}</strong><br />{description}</p>
      <div className="absolute hidden sm:block right-0 bottom-0" >
        <div className={"font-bold text-white opacity-70 flex gap-2 md:gap-4 group-hover/manipulative:opacity-100 p-1 md:p-2 text-sm md:text-base lg:py-3 lg:text-2xl lg:p-4 rounded-3xl rounded-r-none"} style={{backgroundColor: innerColor}}>
          <button onClick={() => updateQuantity(Math.max(0, quantity - 1))} className="">-</button>
          <p className="w-10 text-center">{quantity}</p>
          <button onClick={() => updateQuantity(Math.min(99, quantity + 1))} className="">+</button>
        </div>
      </div>
      <div className="absolute sm:hidden left-0 bottom-0 p-1 rounded-tr-md lg:p-2 lg:rounded-bl-3xl lg:px-4" style={{backgroundColor: innerColor}}>
        <p className="text-[8px] xs:text-sm lg:text-2xl font-bold text-white">{`${price} Rs.`}</p>
      </div>
      <div className="absolute hidden sm:block right-0 top-0 rounded-tr-md p-1 md:p-2 rounded-bl-xl md:rounded-bl-3xl px-2 md:px-4" style={{backgroundColor: innerColor}}>
        <p className="text-[8px] xs:text-sm lg:text-2xl font-bold text-white">{`${price} Rs.`}</p>
      </div>
      <div className="flex flex-col px-2 h-full sm:hidden text-white font-bold text-sm items-center" style={{backgroundColor: innerColor}}>
        <button onClick={() => updateQuantity(Math.min(99, quantity + 1))} className="flex-1">+</button>
        <p className="">{quantity}</p>
        <button onClick={() => updateQuantity(Math.max(0, quantity - 1))} className="flex-1">-</button>
      </div>
    </SlidingDiv>    
    </>
  )
}