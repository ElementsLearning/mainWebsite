import Blog from "@/models/BlogModel"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  
  const log = process.env.ZOHO_PASSWORD

  return NextResponse.json({ log })
}