import { IconButton } from "@/components/custom/IconButton"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export const SubscribeSection = () => {

  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="xl:flex hidden p-2 px-4 rounded-full rounded-br-none bg-[#FBBA41] font-bold">Subscribe</div>
      <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white">Subscribe</div>
      <div className="flex-1 xl:px-12 flex flex-col text-sm md:text-base gap-4 text-white">
        <div className="flex gap-2">
          <img src="/logo-white-text.png" className="h-10" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="">Subscribe to our Newsletters and stuff.</p>
          <div className="flex gap-2">
            <input type="text" className="flex-1 text-black px-2 min-w-0"/>
            <IconButton icon={<ArrowRightIcon className="size-full"/>} text={"Subscribe"} className={"bg-[#FBBA41] font-bold text-sm sm:text-base lg:text-lg text-white p-2 xs:px-4"} />
          </div>
        </div>
      </div>
    </div>
  )
}
