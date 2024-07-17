import { HeaderType, IndentedType } from "@/constants/Blogs/blog"
import { headerOptions } from "@/constants/Blogs/blogOptions"
import { getTailwind } from "@/lib/utils"

export const BlogHeader: React.FC<HeaderType & IndentedType> = ({size, weight, style, text, indented}) => {
  
  const styleClassName = getTailwind(headerOptions, "Font Style", style)
  const weightClassName = getTailwind(headerOptions, "Font Weight", weight)
  const sizeClassName = getTailwind(headerOptions, "Font Size", size)

  return (
    <h3 className={`${sizeClassName} ${weightClassName} ${styleClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
      {text}
    </h3>
  )
}
