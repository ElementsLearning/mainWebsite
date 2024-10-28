"use client"

import { BlogBullets } from "@/components/blogComponents/BlogBullets"
import { BlogHeader } from "@/components/blogComponents/BlogHeader"
import { BlogImage } from "@/components/blogComponents/BlogImage"
import { BlogParagraph } from "@/components/blogComponents/BlogParagraph"
import { defaultBlog, defaultBullets, defaultHeader, defaultImage, defaultParagraph } from "@/constants/Blogs/allBlogs"
import { Blog, BlogContent, Editable } from "@/constants/Blogs/blog"
import { createZip, deepCopy, processBlog } from "@/lib/utils"
import { useCallback, useState } from "react"
import { ImageUploader } from "../custom/ImageUploader"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../ui/dialog"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { NewComponentButton } from "./NewComponentButton"

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

const uploadBlog = (blog: Blog, name: string) => {
  const { blog: modifiedBlog, images, blogName } = processBlog(blog, name);
  createZip(modifiedBlog, images, blogName)
  console.log({blog: modifiedBlog, images})
}

export const EditBlog: React.FC<EditBlogProps> = ({blogToEdit=defaultBlog}) => {

  const [blog, setBlog] = useState<Blog>({...blogToEdit})
  const { headerSrc, author, headerData, title, content } = blog

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

  const [filename, setFileName] = useState("")
  const isAllowed = (
    filename !== "" && 
    !filename.includes(" ") && 
    !filename.includes("-")
  )

  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <ImageUploader src={headerSrc} data={headerData} onImageChange={(data, name) => setBlog({...blog, headerSrc: name, headerData: data})} />
      <div className="flex flex-col gap-4 w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:px-32">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 w-full">
            <Input placeholder="Blog Title" value={title} onChange={(e) => setBlog({...blog, title: e.target.value})} className="font-bold text-2xl md:text-3xl xl:text-5xl h-fit border-0" />
            <Input placeholder="Author of Blog" value={author} onChange={(e) => setBlog({...blog, author: e.target.value})} className="text-base h-fit border-0" />
          </div>
        </div>
        {content?.map(({type, ...props}, i) => <BlogComponent key={`blogComponent-${i}`} type={type} {...props} 
        onEdit={(edited: BlogContent) => {
          setBlog({...blog, content: [...blog.content.slice(0, i), edited, ...blog.content.slice(i+1)]})
        }} moveUp={() => moveUp(i)} moveDown={() => moveDown(i)} deleteComponent={() => deleteComponent(i)}
        />)}
        <NewComponentButton onAdd={onAdd} />
      </div>
      <div className="flex justify-end p-4 gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Upload Blog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] w-full flex flex-col gap-4 p-8 rounded-md">
            <p className="text-center font-bold text-4xl">Upload Blog</p>
            <Input placeholder="FileName" value={filename} onChange={(e) => setFileName(e.target.value)} className="" />
            <Textarea placeholder="Blog Summary" value={blog.summary} onChange={(e) => setBlog({...blog, summary: e.target.value})} className="h-48" />
            <div className="flex gap-2">
              <DialogClose>
                <Button variant={"secondary"}>Close</Button>
              </DialogClose>
              <Button disabled={!isAllowed || blog.summary === ""}
              onClick={() => uploadBlog(blog, filename)}>Upload</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}