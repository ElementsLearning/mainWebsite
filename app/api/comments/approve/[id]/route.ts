import connectMongo from "@/lib/connectMongo";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/models/CommentModel";

export const dynamic = 'force-dynamic';

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id } = params;

  try {
    await connectMongo();

    const comment = await Comment.findById(id);
    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    comment.approved = !comment.approved;
    await comment.save();

    return NextResponse.json({ comment });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error changing comment status" }, { status: 500 });
  }
}
