import { FadeIn } from "../FadeIn"
import { BlogBullets } from "./BlogBullets"
import { BlogHeader } from "./BlogHeader"
import { BlogImage } from "./BlogImage"
import { BlogParagraph } from "./BlogParagraph"

const BlogComponent = ({type, ...props}) => {
  switch (type) {
    case "paragraph": {
      return <BlogParagraph {...props} />
    }
    case "header": {
      return <BlogHeader {...props} />
    }
    case "bullets": {
      return <BlogBullets {...props} />
    }
    case "image": {
      return <BlogImage {...props} />
    }
    default: {
      return <p className="font-bold text-3xl text-red-500">Error in BLOG JSON</p>
    }
  }
}

export const BlogPage = ({title, headerSrc, content, author, date}) => {

  console.log(content)

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
        {content?.map(({type, ...props}) => <BlogComponent type={type} {...props} />)}
      </FadeIn>
    </div>
  )
}
