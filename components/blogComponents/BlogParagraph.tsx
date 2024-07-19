import { Editable, IndentedType, ParagraphType } from "@/constants/Blogs/blog"
import { paragraphOptions } from "@/constants/Blogs/blogOptions"
import { getTailwind } from "@/lib/utils"
import { Card } from "../ui/card"
import { Textarea } from "../ui/textarea"
import { BlogOption } from "./BlogOption"
import { useState } from "react"
import { CrossCircledIcon, Pencil2Icon } from "@radix-ui/react-icons"

export const BlogParagraph: React.FC<ParagraphType & IndentedType & Editable> = ({size, weight, style, text, alignment, indented, editable=false, onEdit=()=>{}}) => {
  
  const styleClassName = getTailwind(paragraphOptions, "Font Style", style)
  const weightClassName = getTailwind(paragraphOptions, "Font Weight", weight)
  const sizeClassName = getTailwind(paragraphOptions, "Font Size", size)
  const alignmentClassName = getTailwind(paragraphOptions, "Text Alignment", alignment)

  const [opened, setOpened] = useState(false) 

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
    <div className="relative">
      {editable && 
      <div className="absolute p-1 bg-neutral-50 shadow-md z-10 rounded-md translate-x-1/2 -translate-y-1/2 top-0 right-0" onClick={() => setOpened(!opened)}>
        {opened ? <CrossCircledIcon className="size-6" /> : <Pencil2Icon className="size-6" />}
      </div>}
      {editable ?
      <>
      <Card className={`overflow-hidden border-0 flex p-0 justify-between items-center absolute h-0 w-full transition-all duration-200 top-0 -translate-y-full ${opened ? "p-4 h-32 border-2" : "p-0 border-0 h-0"}`} >
        <p className="text-3xl text-light-black">Paragraph</p>
        <div className="flex gap-4 items-center">
          {paragraphOptions.map(option => 
          <BlogOption key={option.JSONkey} 
          {...option} 
          onChange={(value) => onEdit({...current, [option.JSONkey]: value})}
          />)}
        </div>
      </Card>
      <Textarea value={text} onChange={(e) => onEdit({...current, text: e.target.value})} className={`h-48 ${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`} />
      </>:
      <p className={`${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
        {text}
      </p>}
    </div>
  )
}
