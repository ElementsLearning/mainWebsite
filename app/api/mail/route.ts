import { NextRequest, NextResponse } from "next/server"

import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: NextRequest) {
  
  const { email } = await request.json()

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

    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: process.env.ZOHO_EMAIL,
      subject: `Message from ${email.name}`,
      text: `${email.message}\nFrom: ${email.emailID}`,
      html: `<div style="white-space: pre-wrap;">${email.message}</div><p>From: ${email.emailID}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Sent Successfully"})

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error})
  }
}