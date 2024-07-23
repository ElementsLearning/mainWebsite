import connectMongo from "@/lib/connectMongo";
import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/BlogModel"


export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: NextRequest) {

  const { blog } = await request.json()

  try {
    await connectMongo()

    const newBlog = await Blog.create({...blog})
    await newBlog.save()

    return NextResponse.json({ blog: newBlog})
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error})
  }
}