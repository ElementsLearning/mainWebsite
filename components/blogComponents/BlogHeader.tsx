import { Editable, HeaderType, IndentedType } from "@/constants/Blogs/blog"
import { headerOptions } from "@/constants/Blogs/blogOptions"
import { getTailwind } from "@/lib/utils"
import { CrossCircledIcon, Pencil2Icon } from "@radix-ui/react-icons"
import { useState } from "react"
import { Card } from "../ui/card"
import { BlogOption } from "./BlogOption"
import { Textarea } from "../ui/textarea"

export const BlogHeader: React.FC<HeaderType & IndentedType & Editable> = ({size, weight, style, alignment, text, indented, editable=false, onEdit=()=>{}}) => {
  
  const styleClassName = getTailwind(headerOptions, "Font Style", style)
  const weightClassName = getTailwind(headerOptions, "Font Weight", weight)
  const sizeClassName = getTailwind(headerOptions, "Font Size", size)
  const alignmentClassName = getTailwind(headerOptions, "Text Alignment", alignment)

  const [opened, setOpened] = useState(false) 

  const current: HeaderType & IndentedType = {
    type: "HEADER",
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
        <p className="text-3xl text-light-black">Header</p>
        <div className="flex gap-4 items-center">
          {headerOptions.map(option => 
          <BlogOption key={option.JSONkey} 
          {...option} 
          onChange={(value) => onEdit({...current, [option.JSONkey]: value})}
          />)}
        </div>
      </Card>
      <Textarea value={text} onChange={(e) => onEdit({...current, text: e.target.value})} className={`h-48 ${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`} />
      </>:
      <h3 className={`${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName} ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
        {text}
      </h3>}
    </div>
  )
}
