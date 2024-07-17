"use client"

import { StaggeredHeaders } from "@/components/custom/StaggeredHeaders";
import { Footer } from "@/components/pages/Footer/Footer";
import { allBlogs } from "@/constants/Blogs/allBlogs";
import { Blog } from "@/constants/Blogs/blog";
import Link from "next/link";

const BlogCard: React.FC<Blog> = ({id, title, author, date, summary}) => {
  return (
    <Link href={`/blogs/${id}`} className="flex-1 group min-w-64 md:min-w-96 shadow-lg rounded-md border flex flex-col gap-4 p-6 transition-shadow duration-300 hover:shadow-[#FBBA41]">
      <div className="flex flex-col">
        <p className="font-bold text-lg md:text-2xl">{title}</p>
        <p className="italic text-sm md:text-base">{author}</p>
        <p className="text-xs md:text-sm">{date}</p>
      </div>
      <p className="text-xs md:text-sm transition-colors text-neutral-400 group-hover:text-light-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae vitae praesentium ea dolorem fugiat atque tempore itaque fugit possimus, laudantium saepe. Recusandae harum saepe odit, cupiditate repudiandae alias eum pariatur temporibus ab voluptatem voluptas? Iusto laudantium ad culpa doloribus.
      </p>
    </Link>
  )
}

export default function AllBlogs() {

  return (
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 xs:px-10 md:px-20 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center">
        <StaggeredHeaders headers={["Blogs"]} containerClass="text-3xl text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold" direction="left" />
        <div className="max-w-[200px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[600px]">
          <img src="/newsandupdatespage/newsandupdates.png" alt="" />
        </div>
      </section>
      <div className="p-4 md:p-8 xl:p-16 flex flex-wrap gap-4">
        {allBlogs.map(blog => <BlogCard key={blog.id} {...blog} />)}
        {allBlogs.map(blog => <BlogCard key={blog.id} {...blog} />)}
        {allBlogs.map(blog => <BlogCard key={blog.id} {...blog} />)}
        {allBlogs.map(blog => <BlogCard key={blog.id} {...blog} />)}
      </div>
      <Footer />
    </div>
  )
}