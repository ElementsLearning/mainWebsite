import { BulletType, Editable, IndentedType, ParagraphType } from "@/constants/Blogs/blog"
import { BlogParagraph } from "./BlogParagraph"
import { BlogHeader } from "./BlogHeader"
import { Input } from "../ui/input"
import { defaultHeader } from "@/constants/Blogs/allBlogs"
import { getTailwind } from "@/lib/utils"
import { headerOptions, paragraphOptions } from "@/constants/Blogs/blogOptions"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { ChevronRight, XIcon } from "lucide-react"
import { BlogOption } from "./BlogOption"
import { useState } from "react"
import { CrossCircledIcon, Pencil2Icon } from "@radix-ui/react-icons"

export const BlogBullets: React.FC<BulletType & IndentedType & Editable> = ({header, points, pointStyle, indented=false, style, editable=false, onEdit=()=>{}, deleteComponent=()=>{}}) => {

  const alignment = style === "NUMBERS" || style === "LETTERS" ? "items-center" : "items-start"

  const defaultProps: ParagraphType = {
    type: "PARAGRAPH",
    alignment: "CENTER",
    size: "XS",
    style: "NONE",
    text: "",
    weight: "BOLD"
  }

  const Marker: React.FC<{i: number}> = ({i}) => {
    if (style === "DISCS") {
      return (
        <div className="bg-light-black p-0.5 mt-2 rounded-full">
          <div className="bg-light-black rounded-full size-1 md:size-2" />
        </div>
      )
    } 
    else if (style === "DOTS") {
      return (
        <div className="bg-light-black p-0.5 mt-2 rounded-full">
          <div className="bg-white rounded-full size-1 md:size-2" />
        </div>
      )
    } else if (style === "NUMBERS") {
      return (
        <BlogParagraph indented={false} {...{...defaultProps, text: `${i+1}. `}}/>
      )
    } else if (style === "LETTERS") {
      return (
        <BlogParagraph indented={false} {...{...defaultProps, text: `${String.fromCharCode(65+i)}. `}} />
      )
    } else return <></>
  }

  const [opened, setOpened] = useState(false)
  const [headerSettings, setHeaderSettings] = useState(false)

  const current: BulletType & IndentedType = {
    type: "BULLET",
    pointStyle: pointStyle,
    header: header,
    style: style,
    points: points,
    indented: indented
  }

  const bulletHeader = header || defaultHeader

  const headerstyleClassName = getTailwind(headerOptions, "Font Style", bulletHeader.style)
  const headerweightClassName = getTailwind(headerOptions, "Font Weight", bulletHeader.weight)
  const headersizeClassName = getTailwind(headerOptions, "Font Size", bulletHeader.size)
  const headeralignmentClassName = getTailwind(headerOptions, "Text Alignment", bulletHeader.alignment)

  const styleClassName = getTailwind(paragraphOptions, "Font Style", pointStyle.style)
  const weightClassName = getTailwind(paragraphOptions, "Font Weight", pointStyle.weight)
  const sizeClassName = getTailwind(paragraphOptions, "Font Size", pointStyle.size)
  const alignmentClassName = getTailwind(paragraphOptions, "Text Alignment", pointStyle.alignment)

  return (
    <>
      {editable ? 
      <div className={`relative flex flex-col gap-1 ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
        <div className="absolute p-1 bg-neutral-50 shadow-md z-10 rounded-md translate-x-1/2 -translate-y-1/2 top-0 right-0" onClick={() => {setOpened(!opened)}}>
          {opened ? <CrossCircledIcon className="size-6" /> : <Pencil2Icon className="size-6" />}
        </div>
        <div className={`overflow-hidden border-0 flex p-0 justify-between items-center absolute h-0 w-full transition-all duration-200 top-0 -translate-y-full ${opened ? "py-2 h-32" : "p-0 border-0 h-0"}`} >
          <Card className="size-full flex justify-between items-center p-4">
            <div className="flex gap-2">
              <Button size={"icon"} variant={"ghost"} onClick={() => deleteComponent()}>
                <XIcon className="size-4"/>
              </Button>
              <p className="text-3xl text-light-black">{headerSettings ? "Bullet Header" : "Bullets"}</p>
            </div>
            <div className="flex gap-4 items-center">
              <BlogOption key={"style"} value={style} onChange={(value) => onEdit({...current, style: value as ("NUMBERS" | "LETTERS" | "DISCS" | "DOTS" | "NONE")})} title="Bullets" 
                options={[
                  {name: "Numbers", value: "NUMBERS", tailwind: ""},
                  {name: "Letters", value: "LETTERS", tailwind: ""},
                  {name: "Discs", value: "DISCS", tailwind: ""},
                  {name: "Dots", value: "DOTS", tailwind: ""},
                  {name: "None", value: "NONE", tailwind: ""},
                ]}/>
              {headerSettings ?
              <> 
              {headerOptions.map(option => 
              <BlogOption key={option.JSONkey} 
              {...option} value={(bulletHeader as unknown as Record<string, string>)[option.JSONkey]}
              onChange={(value) => onEdit({...current, header: {...bulletHeader, [option.JSONkey]: value}})}
              />)}
              </>:
              <>
              {paragraphOptions.map(option => 
              <BlogOption key={option.JSONkey} 
              {...option} value={(pointStyle as unknown as Record<string, string>)[option.JSONkey]}
              onChange={(value) => onEdit({...current, pointStyle: {...pointStyle, [option.JSONkey]: value}})}
              />)}
              </>}
              <Button onClick={() => setHeaderSettings(!headerSettings)} size={"icon"} variant={"ghost"}><ChevronRight className={`size-6 transition-transform duration-300 ${headerSettings ? "rotate-180" : ""}`}/></Button>
            </div>
          </Card>
        </div>
        <div className="flex">
          <Input className={`${headersizeClassName} ${headerweightClassName} ${headerstyleClassName} ${headeralignmentClassName}`} placeholder="bullet header (optional)" value={header?.text} onChange={(e) => onEdit({...current, header: {...bulletHeader, text: e.target.value}})} />
        </div>
        <div className="flex flex-col pl-2 xs:pl-4 md:pl-8 xl:pl-12 gap-1">
          {points.map((point, i) => (
            <div key={i} className={`flex gap-2 ${alignment}`}>
              <Marker i={i} />
              {/* <BlogParagraph type={"PARAGRAPH"} indented={false} {...pointStyle} text={point} /> */}
              <Input placeholder={`Point ${i+1}`} value={point} onChange={(e) => onEdit({...current, points: [...points.slice(0, i), e.target.value, ...points.slice(i+1)]})} className={`${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName}`}/>
            </div>
          ))}
        </div>
      </div>
      : 
      <div className={`flex flex-col gap-1 ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
        {header && <BlogHeader indented={false} {...header}/>}
        <div className="flex flex-col pl-2 xs:pl-4 md:pl-8 xl:pl-12 gap-1">
          {points.map((point, i) => (
            <div key={i} className={`flex gap-2 ${alignment}`}>
              <Marker i={i} />
              <BlogParagraph type={"PARAGRAPH"} indented={false} {...pointStyle} text={point} />
            </div>
          ))}
        </div>
      </div>}
    </>
  )
}
