import { ShopItemType } from "@/constants/Shop/shopItems"
import { SlidingDiv } from "../custom/SlidingDiv"

type ItemCardProps = ShopItemType & {
  index: number
  quantity: number
  updateQuantity: (quantity: number) => void
}

export const ItemCard: React.FC<ItemCardProps> = ({description, name, price, quantity, src, updateQuantity, index, color, innerColor}) => {
  
  return (
    <SlidingDiv direction={"bottom"} delay={index*0.25} className="relative group/manipulative flex gap-4 items-center rounded-3xl rounded-bl-[96px] text-2xl rounded-tl-none" style={{backgroundColor: color}}>
      <div className="relative size-16 xs:size-24 sm:size-32 md:size-40 lg:size-48 rounded-full rounded-tl-none overflow-hidden p-4 sm:p-8 md:p-10 lg:p-12" style={{backgroundColor: innerColor}}>
        <img src={src} className="w-full"/>
      </div>
      <p className="flex-1 text-[8px] leading-none xs:text-[10px] sm:text-sm md:text-base xl:text-lg"><strong className="text-2xl">{name}</strong><br />{description}</p>
      <div className="absolute hidden min-[700px]:block right-0 bottom-0" >
        <div className={"font-bold text-white opacity-70 flex gap-4 group-hover/manipulative:opacity-100 p-2 text-sm md:text-base lg:py-3 lg:text-2xl lg:p-4 rounded-3xl rounded-tr-none"} style={{backgroundColor: innerColor}}>
          <button onClick={() => updateQuantity(Math.max(0, quantity - 1))} className="">-</button>
          <p className="w-10 text-center">{quantity}</p>
          <button onClick={() => updateQuantity(Math.min(99, quantity + 1))} className="">+</button>
        </div>
      </div>
      <div className="absolute right-0 top-0 p-2 rounded-bl-3xl px-4" style={{backgroundColor: innerColor}}>
        <p className="text-2xl font-bold text-white">{`${price} Rs.`}</p>
      </div>
    </SlidingDiv>
  )
}