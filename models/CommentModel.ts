import { Comment } from "@/constants/Blogs/blog"
import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
  blogID: {
    type: String,
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  approved: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

export default mongoose.models.Comment || mongoose.model<Comment>("Comment", CommentSchema)