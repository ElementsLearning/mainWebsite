import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { Update } from "@/constants/update"

export const UpdateCard: React.FC<Update> = ({src, content, title}) => {

  return (
    <SlidingDiv direction={"top"} className="flex flex-col flex-1 rounded-[50px] overflow-hidden rounded-tl-none gap-4 md:max-w-md bg-[#F3EEE8]">
      <div className="w-full bg-neutral-400">
        <img src={src} alt="" className="w-full" />
      </div>
      <div className="flex flex-col flex-1 gap-4 p-8 md:p-6 lg:p-6 xl:p-10 items-start">
        <p className="text-sm md:text-base lg:text-lg xl:text-xl font-bold">{title}</p>
        <p className="text-xs md:text-sm lg:text-base">{content}</p>
      </div>
    </SlidingDiv>
  )
}