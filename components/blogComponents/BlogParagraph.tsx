import { Editable, IndentedType, ParagraphType } from "@/constants/Blogs/blog"
import { paragraphOptions } from "@/constants/Blogs/blogOptions"
import { getTailwind } from "@/lib/utils"
import { Card } from "../ui/card"
import { Textarea } from "../ui/textarea"

export const BlogParagraph: React.FC<ParagraphType & IndentedType & Editable> = ({size, weight, style, text, alignment, indented, editable=false, onEdit=()=>{}}) => {
  
  const styleClassName = getTailwind(paragraphOptions, "Font Style", style)
  const weightClassName = getTailwind(paragraphOptions, "Font Weight", weight)
  const sizeClassName = getTailwind(paragraphOptions, "Font Size", size)
  const alignmentClassName = getTailwind(paragraphOptions, "Text Alignment", alignment)

  const current: ParagraphType & IndentedType = {
    type: "PARAGRAPH",
    text: text,
    size: size,
    weight: weight,
    style: style,
    alignment: alignment,
    indented: indented
  }

  return (
    <div className="relative group">
      {editable ?
      <>
      <Card className="overflow-hidden border-0 flex group-hover:p-6 p-0 justify-between items-center absolute h-0 w-full group-hover:h-20 group-hover:border-2 transition-all duration-200 top-0 -translate-y-full" >
        <p className="text-3xl text-light-black">Paragraph</p>
      </Card>
      <Textarea value={text} onChange={(e) => onEdit({...current, text: e.target.value})} className={`h-48 ${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`} />
      </>:
      <p className={`${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
        {text}
      </p>}
    </div>
  )
}
