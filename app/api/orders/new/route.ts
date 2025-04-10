import { NextRequest, NextResponse } from "next/server"

import Order from "@/models/OrderModel"
import connectMongo from "@/lib/connectMongo"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: NextRequest) {
  
  const { order } = await request.json()

  try {
    await connectMongo()

    const newOrder = await Order.create({...order})
    await newOrder.save()

    return NextResponse.json({ Order: newOrder })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error, order})
  }
}