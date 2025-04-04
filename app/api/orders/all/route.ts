import { NextResponse } from "next/server"
import Order from "@/models/OrderModel"
import connectMongo from "@/lib/connectMongo"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
  
  await connectMongo()

  const orders = await Order.find().sort({ createdAt: -1 })

  return NextResponse.json({ orders })
}