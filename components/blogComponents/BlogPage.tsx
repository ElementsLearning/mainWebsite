import { Blog } from "@/constants/Blogs/blog"
import { PersonIcon } from "@radix-ui/react-icons"
import { Calendar } from "lucide-react"
import { FadeIn } from "../custom/FadeIn"
import { BlogBullets } from "./BlogBullets"
import { BlogHeader } from "./BlogHeader"
import { BlogImage } from "./BlogImage"
import { BlogParagraph } from "./BlogParagraph"

type BlogComponentProps = {
  type: string
}

const BlogComponent: React.FC<BlogComponentProps> = ({type, ...props}) => {
  switch (type) {
    case "PARAGRAPH": {
      // @ts-ignore
      return <BlogParagraph {...props} />
    }
    case "HEADER": {
      // @ts-ignore
      return <BlogHeader {...props} />
    }
    case "BULLET": {
      // @ts-ignore
      return <BlogBullets {...props} />
    }
    case "IMAGE": {
      // @ts-ignore
      return <BlogImage {...props} />
    }
    default: {
      return <p className="font-bold text-3xl text-red-500">Error in BLOG JSON</p>
    }
  }
}

export const BlogPage: React.FC<Blog> = ({title, headerSrc, content, author, date}) => {

  return (
    <div className="flex flex-col gap-2">
      {headerSrc &&
      <div className="relative">
        <img src={headerSrc} alt="" className="w-full" />
      </div>
      }
      <FadeIn threshold={0.01} className="flex flex-col gap-4 w-full p-4 xs:p-10 sm:p-16 lg:p-20 xl:px-40">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl md:text-3xl xl:text-5xl">{title}</h2>
            <div className="flex gap-1 items-center">
              <PersonIcon className="size-4" />
              <p className="text-base">{author}</p>
            </div>
            <div className="flex sm:hidden text-sm italic items-center gap-1">
              <Calendar className="size-4" />
              <p>{date}</p>
            </div>
          </div>
          <div className="hidden sm:flex text-sm italic items-center gap-1">
            <Calendar className="size-4" />
            <p>{date}</p>
          </div>
        </div>
        {content?.map(({type, ...props}, i) => <BlogComponent key={`blogComponent-${i}`} type={type} {...props} />)}
      </FadeIn>
    </div>
  )
}
