import { EditBlog } from "@/components/blogComponents/EditBlog"
import { Authenticator } from "@/components/custom/Authenticator"
import { allBlogs } from "@/constants/Blogs/allBlogs"


export default function EditPage({ params }: { params: { id: string }}) {

  const { id } = params
  const blog = allBlogs.find(b => b.id === id)

  return (
    <Authenticator>
      {blog && <EditBlog blogToEdit={blog} />}
    </Authenticator>
  )
}