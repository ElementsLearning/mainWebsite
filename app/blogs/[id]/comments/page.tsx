"use client"
import { CommentSection } from "@/components/blogComponents/CommentSection"
import { Authenticator } from "@/components/custom/Authenticator"
import { allBlogs } from "@/constants/Blogs/allBlogs"
import { PersonIcon } from "@radix-ui/react-icons"
import { Calendar } from "lucide-react"

export default function Page({ params }: { params: { id: string }}) {

  const { id } = params
  const blog = allBlogs.find(b => b.id === id)

  return (
    <Authenticator>
    {blog &&
    <>
      <div className="flex flex-col gap-4 w-full p-4 xs:p-10 sm:px-16 lg:px-20 xl:px-40">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl md:text-3xl xl:text-5xl">{blog.title}</h2>
            <div className="flex gap-1 items-center">
              <PersonIcon className="size-4" />
              <p className="text-base">{blog.author}</p>
            </div>
            <div className="flex sm:hidden text-sm italic items-center gap-1">
              <Calendar className="size-4" />
              <p>{blog.date}</p>
            </div>
          </div>
          <div className="hidden sm:flex text-sm italic items-center gap-1">
            <Calendar className="size-4" />
            <p>{blog.date}</p>
          </div>
        </div>
      </div>
      <CommentSection admin={true} id={id}/>
    </>}
    </Authenticator>
  )
}