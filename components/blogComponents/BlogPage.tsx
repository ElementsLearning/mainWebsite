import { Blog, BlogContent } from "@/constants/Blogs/blog"
import { BlogParagraph } from "./BlogParagraph"
import { BlogHeader } from "./BlogHeader"
import { BlogBullets } from "./BlogBullets"
import { BlogImage } from "./BlogImage"
import { FadeIn } from "../custom/FadeIn"

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
      <div className="relative max-h-[500px] overflow-hidden">
        <img src={headerSrc} alt="" className="w-full" />
      </div>
      }
      <FadeIn threshold={0.01} className="flex flex-col gap-4 w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:px-32">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl md:text-3xl xl:text-5xl">{title}</h2>
            <p className="text-base">{"By " + author}</p>
            <p className="sm:hidden text-sm italic">{date}</p>
          </div>
          <p className="hidden sm:block text-sm italic">{date}</p>
        </div>
        {content?.map(({type, ...props}, i) => <BlogComponent key={i} type={type} {...props} />)}
      </FadeIn>
    </div>
  )
}
