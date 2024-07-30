import connectMongo from "@/lib/connectMongo"
import { NextResponse } from "next/server"
import Comment from "@/models/CommentModel"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  
  await connectMongo()

  const comments = await Comment.find()

  return NextResponse.json({ comments })
}