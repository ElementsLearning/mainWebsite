import { Blog } from "@/constants/Blogs/blog"
import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  headerSrc: {
    type: String
  },
  content: {
    type: [Object],
    required: true
  }
}, { timestamps: true })

export default mongoose.models.Blog || mongoose.model<Blog>("Blog", BlogSchema)