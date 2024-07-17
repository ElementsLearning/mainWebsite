import { BulletType, IndentedType, ParagraphType } from "@/constants/Blogs/blog"
import { BlogParagraph } from "./BlogParagraph"
import { BlogHeader } from "./BlogHeader"

export const BlogBullets: React.FC<BulletType & IndentedType> = ({header, points, indented=false, style}) => {

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

  return (
    <div className={`flex flex-col gap-1 ${indented ? "pl-2 xs:pl-4 md:pl-8 xl:pl-12" : ""}`}>
      {header && <BlogHeader indented={false} {...header}/>}
      <div className="flex flex-col pl-2 xs:pl-4 md:pl-8 xl:pl-12 gap-1">
        {points.map((point, i) => (
          <div className={`flex gap-2 ${alignment}`}>
            <Marker i={i} />
            <BlogParagraph indented={false} {...point} />
          </div>
        ))}
      </div>
    </div>
  )
}
