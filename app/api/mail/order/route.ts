import { NextRequest, NextResponse } from "next/server"

import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: NextRequest) {
  
  const { order, totalAmount } = await request.json()

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    })

    const { email, name, address, postalCode, city } = order.customerInfo

    const message = `
    Dear ${name}\n\n
    Thank you for your order!\n
    Your order has been received and is now being processed.\n\n
    Order Details:\n
    ${order.items.map((item: {name: string, quantity: string}) => `${item.name}: ${item.quantity}`).join("\n")}\n\n
    Delivery Address:\n
    ${address} ${city} ${postalCode}\n\n
    Total Amount: Rs.${totalAmount}\n\n
    Thank you for shopping with us!\n
    Best regards,\n
    Elements Learning`

    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: email,
      subject: `Order Confirmation`,
      text: `${message}`,
      html: `<div style="white-space: pre-wrap;">${message}</div>`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Sent Successfully"})

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error})
  }
}