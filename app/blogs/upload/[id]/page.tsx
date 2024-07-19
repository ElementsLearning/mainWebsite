import { EditBlog } from "@/components/blogComponents/EditBlog"
import { allBlogs } from "@/constants/Blogs/allBlogs"


export default function EditPage({ params }: { params: { id: string }}) {

  const { id } = params
  const blog = allBlogs.find(b => b.id === id)

  return (
    <>
    {blog && <EditBlog blogToEdit={blog} />}
    </>
  )
}