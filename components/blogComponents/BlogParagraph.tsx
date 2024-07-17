import { IndentedType, ParagraphType } from "@/constants/Blogs/blog"
import { paragraphOptions } from "@/constants/Blogs/blogOptions"
import { getTailwind } from "@/lib/utils"

export const BlogParagraph: React.FC<ParagraphType & IndentedType> = ({size, weight, style, text, indented}) => {
  
  const styleClassName = getTailwind(paragraphOptions, "Font Style", style)
  const weightClassName = getTailwind(paragraphOptions, "Font Weight", weight)
  const sizeClassName = getTailwind(paragraphOptions, "Font Size", size)

  return (
    <p className={`${sizeClassName} ${weightClassName} ${styleClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
      {text}
    </p>
  )
}
