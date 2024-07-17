import { ImageType, IndentedType } from "@/constants/Blogs/blog"
import { BlogParagraph } from "./BlogParagraph"

export const BlogImage: React.FC<ImageType & IndentedType> = ({src, caption, indented}) => {


  return (
    <div className={`flex flex-col gap-1 items-center ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
      <img src={src} alt="" className="w-full" />
      {caption && <BlogParagraph indented={false} {...caption} /> }
    </div>
  )
}
