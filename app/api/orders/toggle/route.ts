import { NextRequest, NextResponse } from "next/server"

import Order from "@/models/OrderModel"
import connectMongo from "@/lib/connectMongo"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: NextRequest) {
  
  const { id } = await request.json()

  try {
    await connectMongo()

    const order = await Order.findById(id)
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 })
    }

    const newOrder = await Order.findByIdAndUpdate(id, { completed: !order.completed }, { new: true }) 

    return NextResponse.json({ order: newOrder })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error})
  }
}