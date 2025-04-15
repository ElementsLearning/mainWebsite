import { News } from "@/constants/news"

export const NewsCard: React.FC<News> = ({title, src, desc,  date,}) => {
  
  return (
    <div className="w-full p-6 pb-8 lg:p-10 rounded-[50px] md:flex-row-reverse md:items-start  lg:flex-row rounded-br-none flex flex-col-reverse justify-center items-center lg:items-center gap-4 lg:gap-10 shadow-md bg-white border">
      <div className="flex flex-col gap-4 flex-1">
        <div className="flex flex-col text-xs xs:text-sm md:text-base">
          <h4 className="font-bold text-xl xs:text-2xl sm:text-3xl">{title}</h4>
          <p>{date}</p>
        </div>
        
        <p className="text-xs xs:text-sm md:text-base">{desc}</p>
        
        {/* <div className="flex font-semibold gap-4">
          <div className="flex gap-1 items-center">
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>share-outline</title><path d="M14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12L14,5M16,9.83L18.17,12L16,14.17V12.9H14C11.93,12.9 10.07,13.28 8.34,13.85C9.74,12.46 11.54,11.37 14.28,11L16,10.73V9.83Z" /></svg>
            Share
          </div>
          <div className="flex gap-1 items-center">
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>comment-outline</title><path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" /></svg>
            {comments}
          </div>
          <div className="flex gap-1 items-center">
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star-outline</title><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>
            {likes}
          </div>
        </div> */}
      </div>
      <div className="w-full md:w-48 lg:w-64 rounded-[30px] overflow-hidden md:aspect-auto aspect-video rounded-br-none bg-neutral-300">
          {!src.includes(".mp4") && <img src={src} alt="" />}
          {src.includes(".mp4") && 
          <video className={"size-full"} controls>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>}
      </div>
    </div>
  )
}
