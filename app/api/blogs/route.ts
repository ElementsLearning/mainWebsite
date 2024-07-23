import connectMongo from "@/lib/connectMongo"
import { NextResponse } from "next/server"
import Blog from "@/models/BlogModel"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  
  await connectMongo()

  const blogs = await Blog.find()

  return NextResponse.json({ blogs })
}