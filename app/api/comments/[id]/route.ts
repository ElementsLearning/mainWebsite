import connectMongo from "@/lib/connectMongo";
import { NextRequest } from "next/server";
import Comment from "@/models/CommentModel"

export const dynamic = 'force-dynamic'

type RouteParams = {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: RouteParams) {

  const { id } = params

  await connectMongo()

  const comments = await Comment.find({blogID: id}).sort({createdAt: -1})

  return Response.json({comments})
}