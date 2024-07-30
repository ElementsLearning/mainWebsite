import { Editable, ImageType, IndentedType } from "@/constants/Blogs/blog"
import { BlogParagraph } from "./BlogParagraph"
import { Input } from "../ui/input"
import { ImageUploader } from "../custom/ImageUploader"
import { defaultParagraph } from "@/constants/Blogs/allBlogs"
import { paragraphOptions } from "@/constants/Blogs/blogOptions"
import { getTailwind } from "@/lib/utils"
import { useState } from "react"
import { CrossCircledIcon, Pencil2Icon } from "@radix-ui/react-icons"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { ArrowDownIcon, ArrowUpIcon, ChevronRightIcon, XIcon } from "lucide-react"
import { BlogOption } from "./BlogOption"

export const BlogImage: React.FC<ImageType & IndentedType & Editable> = ({src, imgData, caption, indented, editable=false, onEdit=()=>{}, moveUp=()=>{}, moveDown=()=>{}, deleteComponent=()=>{}}) => {

  const imageCaption = caption || {...defaultParagraph, text: ""}

  const [opened, setOpened] = useState(false)

  const current: ImageType & IndentedType = {
    type: "IMAGE",
    src: src,
    imgData: imgData,
    caption: imageCaption,
    indented: indented,
  }

  const styleClassName = getTailwind(paragraphOptions, "Font Style", imageCaption.style)
  const weightClassName = getTailwind(paragraphOptions, "Font Weight", imageCaption.weight)
  const sizeClassName = getTailwind(paragraphOptions, "Font Size", imageCaption.size)
  const alignmentClassName = getTailwind(paragraphOptions, "Text Alignment", imageCaption.alignment)

  return (
    <>
    {editable ? 
    <div className="flex flex-col relative group">

      <div className="absolute p-1 bg-neutral-50 shadow-md z-10 rounded-md translate-x-1/2 -translate-y-1/2 top-0 right-0" onClick={() => {setOpened(!opened)}}>
        {opened ? <CrossCircledIcon className="size-6" /> : <Pencil2Icon className="size-6" />}
      </div>

      <div className={`absolute px-2 left-0 top-0 bottom-0 -translate-x-full overflow-hidden transition-all duration-300 group-hover:w-20 min-h-40 ${opened ? "w-20" : "w-0"}`} >
        <Card className="size-full flex flex-col justify-center py-6 gap-4 border-0 group-hover:border items-center overflow-hidden text-neutral-400">
          <Button onClick={() => moveUp()} size={"icon"} variant={"ghost"}>
            <ArrowUpIcon className="size-6 hover:text-neutral-700" />
          </Button>
          <Button onClick={() => onEdit({...current, indented: !current.indented})} size={"icon"} variant={"ghost"}>
            <ChevronRightIcon className={`size-6 hover:text-neutral-700 transition-transform duration-150 ${current.indented ? "rotate-180" : ""}`} />
          </Button>
          <Button onClick={() => moveDown()} size={"icon"} variant={"ghost"}>
            <ArrowDownIcon className="size-6 hover:text-neutral-700" />
          </Button>
        </Card>
      </div>

      <div className={`overflow-hidden border-0 flex p-0 justify-between items-center absolute h-0 w-full transition-all duration-200 top-0 -translate-y-full ${opened ? "py-2 h-32" : "p-0 border-0 h-0"}`} >
        <Card className="size-full flex justify-between items-center p-4">
          <div className="flex gap-2">
            <Button size={"icon"} variant={"ghost"} onClick={() => deleteComponent()}>
              <XIcon className="size-4"/>
            </Button>
            <p className="text-3xl text-light-black">Image</p>
          </div>
          <div className="flex gap-4 items-center">
            {paragraphOptions.map(option => 
            <BlogOption key={option.JSONkey} 
            {...option} value={(imageCaption as unknown as Record<string, string>)[option.JSONkey]}
            onChange={(value) => onEdit({...current, caption: {...imageCaption, [option.JSONkey]: value}})}
            />)}
          </div>
        </Card>
      </div>
      
      <ImageUploader data={imgData} src={src} onImageChange={(data, name) => onEdit({...current, src: name || "", imgData: data})} />
      <Input placeholder="Image Caption Here" value={caption?.text} onChange={(e) => onEdit({...current, caption: {...imageCaption, text: e.target.value}})}  className={`${sizeClassName} ${weightClassName} ${styleClassName} ${alignmentClassName}`}/>
    </div>
    :
    <div className={`flex flex-col gap-1 items-center ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
      <img src={src} alt="" className="w-full" />
      {caption && <BlogParagraph indented={false} {...caption} /> }
    </div>}
    </>
  )
}
