"use client"

import { StaggeredHeaders } from "@/components/custom/StaggeredHeaders";
import { Footer } from "@/components/pages/Footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { allBlogs } from "@/constants/Blogs/allBlogs";
import { Blog } from "@/constants/Blogs/blog";
import { SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BlogCard: React.FC<Blog> = ({id, title, author, date, summary}) => {
  return (
    <Link href={`/blogs/${id}`} className="flex-1 group min-w-64 md:min-w-96 shadow-lg rounded-md border flex flex-col gap-4 p-6 transition-shadow duration-300 hover:shadow-[#FBBA41]">
      <div className="flex flex-col">
        <p className="font-bold text-lg md:text-2xl">{title}</p>
        <p className="italic text-sm md:text-base">{author}</p>
        <p className="text-xs md:text-sm">{date}</p>
      </div>
      <p className="text-xs md:text-sm transition-colors text-neutral-400 group-hover:text-light-black">
        {summary}
      </p>
    </Link>
  )
}

export default function AllBlogs() {

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs)

  return (
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 xs:px-10 md:px-20 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center">
        <StaggeredHeaders headers={["Blogs"]} containerClass="text-3xl text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold" direction="left" />
        <div className="max-w-[200px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[600px]">
          <img src="/newsandupdatespage/newsandupdates.png" alt="" />
        </div>
      </section>
      <section className="flex flex-col gap-8 p-4 md:p-8 xl:p-16 items-center">
        <div className="flex gap-2 w-full justify-center">
          <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." className="w-full max-w-sm" />
          <Button onClick={() => {
            setFilteredBlogs(allBlogs.filter(blog => 
              (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
              blog.author.toLowerCase().includes(searchTerm.toLowerCase()) || 
              blog.summary.toLowerCase().includes(searchTerm.toLowerCase()))
            ))
            setSearchTerm("")
          }} variant="outline" size={"icon"}>
            <SearchIcon className="size-4" />
          </Button>
          {filteredBlogs.length !== allBlogs.length && 
          <Button onClick={() => {
            setFilteredBlogs(allBlogs)
            setSearchTerm("")
          }} variant={"secondary"} size={"icon"}>
            <XIcon className="size-4" />
          </Button>}
        </div>
        <div className="flex flex-wrap gap-4">
          {filteredBlogs.length >= 1 ? filteredBlogs.map(blog => <BlogCard key={blog.id} {...blog} />) : <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-neutral-600">No Blogs Found</h3>}
        </div>
      </section>
      <Footer />
    </div>
  )
}