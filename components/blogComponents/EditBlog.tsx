"use client"

import { defaultBlog, defaultBullets, defaultHeader, defaultImage, defaultParagraph } from "@/constants/Blogs/allBlogs"
import { Blog, BlogContent, Editable, IndentedType, ParagraphType } from "@/constants/Blogs/blog"
import { useCallback, useState } from "react"
import { BlogBullets } from "@/components/blogComponents/BlogBullets"
import { BlogHeader } from "@/components/blogComponents/BlogHeader"
import { BlogImage } from "@/components/blogComponents/BlogImage"
import { BlogParagraph } from "@/components/blogComponents/BlogParagraph"
import { Input } from "../ui/input"
import { NewComponentButton } from "./NewComponentButton"
import { deepCopy } from "@/lib/utils"
import { ImageUploader } from "../custom/ImageUploader"
import { Button } from "../ui/button"
import { Content } from "next/font/google"

type EditBlogProps = {
  blogToEdit?: Blog
}

type BlogComponentProps = Editable & {
  type: string
}

const BlogComponent: React.FC<BlogComponentProps> = ({onEdit, moveUp, moveDown, deleteComponent, type, ...props}) => {
  switch (type) {
    case "PARAGRAPH": {
      // @ts-ignore
      return <BlogParagraph editable deleteComponent={deleteComponent} moveUp={moveUp} moveDown={moveDown} onEdit={onEdit} {...props} />
    }
    case "HEADER": {
      // @ts-ignore
      return <BlogHeader editable deleteComponent={deleteComponent} moveUp={moveUp} moveDown={moveDown} onEdit={onEdit} {...props} />
    }
    case "BULLET": {
      // @ts-ignore
      return <BlogBullets editable deleteComponent={deleteComponent} moveUp={moveUp} moveDown={moveDown} onEdit={onEdit} {...props} />
    }
    case "IMAGE": {
      // @ts-ignore
      return <BlogImage editable deleteComponent={deleteComponent} moveUp={moveUp} moveDown={moveDown} onEdit={onEdit} {...props} />
    }
    default: {
      return <p className="font-bold text-3xl text-red-500">Error in BLOG JSON</p>
    }
  }
}

const cleanBlog = (name: string, blog: Blog): string => {
  const cleanedBlog = {...blog, content: blog.content.map(contentValue => {
    if (contentValue.type === "IMAGE") {
      return {
        ...contentValue,
        imgData: undefined,
        src: `/blogs/${name}/${contentValue.src}`
      }
    } else return contentValue
  })}

  return `export const ${name} = ${JSON.stringify(cleanedBlog)}`
}

export const EditBlog: React.FC<EditBlogProps> = ({blogToEdit=defaultBlog}) => {

  const [blog, setBlog] = useState<Blog>({...blogToEdit})
  const { headerSrc, author, date, title, summary, content } = blog

  const moveUp = useCallback((index: number) => {
    if (index === 0) return;
    
    const newContent: BlogContent[] = [...blog.content];
    [newContent[index - 1], newContent[index]] = [newContent[index], newContent[index - 1]]

    setBlog(b => ({...b, content: newContent}))

  }, [blog])

  const moveDown = useCallback((index: number) => {
    if (index === blog.content.length - 1) return;

    const newContent: BlogContent[] = [...blog.content];
    [newContent[index + 1], newContent[index]] = [newContent[index], newContent[index + 1]]

    setBlog(b => ({...b, content: newContent}))

  }, [blog])

  const deleteComponent = useCallback((index: number) => {
    const newContent: BlogContent[] = [...blog.content];
    newContent.splice(index, 1);
    setBlog(b => ({...b, content: newContent}))
  }, [blog])

  const onAdd = (comp: string) => {
    switch (comp) {
      case "PARAGRAPH": {
        setBlog(b => ({...b, content: [...b.content, deepCopy({...defaultParagraph, indented: false})]}))
        break
      }
      case "HEADER": {
        setBlog(b => ({...b, content: [...b.content, deepCopy({...defaultHeader, indented: false})]}))
        break
      }
      case "BULLET": {
        setBlog(b => ({...b, content: [...b.content, deepCopy({...defaultBullets, indented: false})]}))
        break
      }
      case "IMAGE": {
        setBlog(b => ({...b, content: [...b.content, deepCopy({...defaultImage, indented: false})]}))
        break
      }
      default: {
      }
    }
  }

  const [headerData, setHeaderData] = useState("")
  const [filename, setFileName] = useState("")

  return (
    <div className="flex flex-col gap-2">
      <ImageUploader onImageChange={(data, name) => {setBlog({...blog, headerSrc: name}); setHeaderData(data)}} />
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
        }} moveUp={() => moveUp(i)} moveDown={() => moveDown(i)} deleteComponent={() => deleteComponent(i)}
        />)}
        <NewComponentButton onAdd={onAdd} />
      </div>
      <div className="flex justify-end p-4 gap-4">
        <Input placeholder="FileName" value={filename} onChange={(e) => setFileName(e.target.value)} className="max-w-lg" /> 
        <Button disabled={filename === "" || filename.includes(" ")} onClick={() => navigator.clipboard.writeText(cleanBlog(filename, blog))}>Upload Blog</Button>
      </div>
    </div>
  )
}