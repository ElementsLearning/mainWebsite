import { NextRequest, NextResponse } from "next/server";

import { Readable } from "stream";
import cloudinary from '@/lib/cloudinaryConfig'

export async function POST(request: NextRequest){

  const formData = await request.formData();    
  const image = formData.get('image') as File;

  try {

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadPromise = new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream({
        folder: 'testing'
      }, (error: any, result: any) => {
        if (error) return reject(error);
        console.log(`URL: ${result.url}`);
        resolve(result.url)
      })

      const readable = new Readable();
      readable._read = () => {}; // No-op _read function, required for custom streams
      readable.push(buffer);
      readable.push(null); // Signal that the stream is finished

      readable.pipe(uploadStream);
    })

    const link = await uploadPromise

    return NextResponse.json({ link })

  } catch (error) {
    return NextResponse.json({error: "Cant Create Link"})
  }
} 
