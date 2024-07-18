"use client"

import { defaultBlog } from "@/constants/Blogs/allBlogs"
import { Blog, BlogContent, IndentedType, ParagraphType } from "@/constants/Blogs/blog"
import { useState } from "react"
import { BlogBullets } from "@/components/blogComponents/BlogBullets"
import { BlogHeader } from "@/components/blogComponents/BlogHeader"
import { BlogImage } from "@/components/blogComponents/BlogImage"
import { BlogParagraph } from "@/components/blogComponents/BlogParagraph"
import { Input } from "../ui/input"

type EditBlogProps = {
  blogToEdit?: Blog
}

type BlogComponentProps = {
  type: string
  onEdit: (edited: BlogContent) => void
}

const BlogComponent: React.FC<BlogComponentProps> = ({onEdit, type, ...props}) => {
  switch (type) {
    case "PARAGRAPH": {
      // @ts-ignore
      return <BlogParagraph editable onEdit={onEdit} {...props} />
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

export const EditBlog: React.FC<EditBlogProps> = ({blogToEdit=defaultBlog}) => {

  const testPara: ParagraphType & IndentedType = {
    type: "PARAGRAPH",
    alignment: "LEFT",
    size: "BASE",
    style: "NONE",
    weight: "NORMAL",
    indented: false,
    text: "A big part of the problem, paradoxically, is a shortage of evidence. Since the dawn of time, several billion human (or humanlike) beings have lived, each contributing a little genetic variability to the total human stock. Out of this vast number, the whole of our understanding of human prehistory is based on the remains, often exceedingly fragmentary, of perhaps five thousand individuals. “You could fit it all into the back of a pickup truck if you didn’t mind how much you jumbled everything up,” Ian Tattersall, the bearded and friendly curator of anthropology at the American Museum of Natural History in New York, replied when I asked him the size of the total world archive of hominid and early human bones.",
  }
  const [blog, setBlog] = useState<Blog>({...blogToEdit, content: [testPara]})
  const { headerSrc, author, date, title, summary, content } = blog


  return (
    <div className="flex flex-col gap-2">
      {/* {headerSrc &&
      <div className="relative max-h-[500px] overflow-hidden">
        <img src={headerSrc} alt="" className="w-full" />
      </div>
      } */}
      <div className="flex flex-col gap-4 w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:px-32">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 w-full">
            <Input placeholder="Blog Title" value={title} onChange={(e) => setBlog({...blog, title: e.target.value})} className="font-bold text-2xl md:text-3xl xl:text-5xl h-fit border-0" />
            <Input placeholder="Author of Blog" value={author} onChange={(e) => setBlog({...blog, author: e.target.value})} className="text-base h-fit border-0" />
          </div>
        </div>
        {content?.map(({type, ...props}, i) => <BlogComponent key={i} type={type} {...props} 
        onEdit={(edited: BlogContent) => {
          setBlog({...blog, content: [...blog.content.slice(0, i), edited, ...blog.content.slice(i+1)]})
        }} />)}
      </div>
    </div>
  )
}