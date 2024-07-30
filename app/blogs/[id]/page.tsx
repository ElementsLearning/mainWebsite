"use client"
import { BlogPage } from "@/components/blogComponents/BlogPage"
import { CommentSection } from "@/components/blogComponents/CommentSection"
import { Footer } from "@/components/pages/Footer/Footer"
import { allBlogs } from "@/constants/Blogs/allBlogs"

export default function Page({ params }: { params: { id: string }}) {

  const { id } = params
  const blog = allBlogs.find(b => b.id === id)

  return (
    <>
    {blog && 
    <>
    <BlogPage {...blog} />
    <CommentSection id={id}/>
    </>}
    <Footer />
    </>
  )
}