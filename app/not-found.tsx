"use client"
import { VideoPlayer } from '@/components/custom/VideoPlayer'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="w-screen flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-[#F3EEE8] min-h-screen">
      <VideoPlayer src="/animations/notfound.mp4" className="w-full max-w-[600px]" />
      <Link href={"/"} className="p-2 md:p-4 bg-light-black text-white font-bold text-lg lg:text-2xl rounded-md">Go Home</Link>
    </div>
  )
}