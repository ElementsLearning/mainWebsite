import connectMongo from "@/lib/connectMongo"
import { NextRequest, NextResponse } from "next/server"
import Comment from "@/models/CommentModel"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: NextRequest) {
  
  const { comment } = await request.json()

  try {
    await connectMongo()

    const newComment = await Comment.create({...comment, approved: false})
    await newComment.save()

    return NextResponse.json({ comment: newComment })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error})
  }
}