import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: NextRequest) {
  
  const { name, message, email } = await request.json()

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL || "tahashah411@gamail.com",
      pass: process.env.EMAIL_PASSWORD || "vabbdgyvlflecksb"
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL || "tahashah411@gamail.com",
    subject: `Message from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}