import { EditBlog } from "@/components/blogComponents/EditBlog";
import { Authenticator } from "@/components/custom/Authenticator";

export default function UploadPage() {
 
  return (
    <Authenticator>
      <EditBlog />
    </Authenticator>
  )
}