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

    const comment = await Comment.findByIdAndDelete(id).exec();
    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    return NextResponse.json({ comment });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error deleting comment" }, { status: 500 });
  }
}
