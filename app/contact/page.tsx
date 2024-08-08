"use client"
import { FadeIn } from "@/components/custom/FadeIn";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { StaggeredHeaders } from "@/components/custom/StaggeredHeaders";
import { VideoPlayer } from "@/components/custom/VideoPlayer";
import { Footer } from "@/components/pages/Footer/Footer";
import { Mail, MapPin, Smartphone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";


type Email = {
  name?: string
  emailID: string
  message: string
}


export default function Contact() {
  
  const [email, setEmail] = useState<Email>({
    name: "",
    emailID: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  
  const sendMail = async () => {

    setLoading(true)
    const { message } = await (await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({email}),
    })).json()

    if (message) toast({variant: "success", title: "Email Sent Successfully"})
    else toast({title: "Email Not Sent", variant: "destructive"})
  
    setLoading(true)
    setEmail({
      name: "",
      emailID: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col">
      <section className="bg-[#F3EEE8] p-2 xs:p-8 xs:px-10 md:px-20 w-full flex flex-col-reverse min-[400px]:flex-row  min-[400px]:gap-4 lg:gap-20 justify-center items-center">
        <StaggeredHeaders headers={["Contact Us"]} containerClass="text-3xl min-[400px] text-4xl sm:text-6xl lg:text-9xl font-bold" direction="left" />
        <div className="max-w-[200px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[600px]">
          {/* <img src="/contactpage/contactus.png" alt="" /> */}
          <VideoPlayer src="/animations/contactUs.mp4" className="size-full" />
        </div>
      </section>
      <section id="location" className="flex flex-col md:gap-4">
        <SlidingDiv direction={"top"} className="flex flex-col p-8 sm gap-2 justify-center">
          <h3 className="text-[#FBBB40] font-bold text-2xl md:text-4xl text-center">Get in touch</h3>
          <p className="text-center text-xs sm:text-sm md:text-xl md:px-5 lg:px-20">{"Got questions or feedback? We're here to help! Reach out to us through the contact form below and our team will get back to you as soon as possible."}</p>
        </SlidingDiv>

        {/* <FadeIn className="w-full h-[200px] md:h-[220px] lg:h-[400px] bg-neutral-300" > */}
        <FadeIn className="" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.501805795956!2d72.98523267424993!3d33.644157339170654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df967473fa7055%3A0xc14fdbda9a155fa7!2sIAEC%20Building%2C%20Scholars%20Ave%2C%20H-12%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1719986374086!5m2!1sen!2s"className="w-full h-[220px] md:h-[250px] lg:h-[400px]" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
        </FadeIn>

        <div className="flex flex-col sm:flex-row p-16 lg:px-32 xl:px-40 px-4 gap-4 justify-center">
          <SlidingDiv id="form" direction={"left"} className="flex flex-col flex-[2_0_0] gap-4">
            <h1 className="font-bold text-3xl text-center sm:hidden">Fill out the Form</h1>
            <input value={email.name} onChange={(e) => setEmail({ ...email, name: e.target.value })} type="text" placeholder="Your Name" className="bg-[#F3EEE8] rounded-md p-3 sm:p-4 text-xs sm:text-base w-full"/>
            <input value={email.emailID} onChange={(e) => setEmail({ ...email, emailID: e.target.value })} type="text" placeholder="Enter Your Email" className="bg-[#F3EEE8] rounded-md p-3 sm:p-4 text-xs sm:text-base  w-full"/>
            <textarea value={email.message} onChange={(e) => setEmail({ ...email, message: e.target.value })} placeholder="Your Message" className="sm:flex-1 bg-[#F3EEE8] rounded-md p-3 sm:p-4 h-32 text-xs sm:text-base  w-full"/>
            <button disabled={email.name === "" || email.emailID === "" || email.message === "" || loading} onClick={sendMail} className="bg-[#FBBA41] disabled:bg-neutral-200 disabled:text-light-black hover:bg-light-black hover:text-[#FBBA41] transition-colors rounded-md p-2 sm:text-base text-sm sm:p-4 font-bold">{loading ? "Loading" : "Submit"}</button>
          </SlidingDiv>
          <SlidingDiv id="info" direction={"right"} className="flex-[1.5_0_0] flex flex-col gap-4">
          <h1 className=" font-bold text-3xl text-center sm:hidden">Our Info</h1>
            <div className="flex gap-2 p-4 md:p-6 rounded-md bg-[#F3EEE8]">
              <MapPin className="size-8 text-[#FBBB40]" /> 
              <div  className="flex flex-col gap-2">
                <p className="text-lg lg:text-2xl font-bold">Address</p>
                <p className="text-sm md:text-base">Media Lab, IAEC, NUST H-12 Islamabad, 44000</p>
              </div>
            </div>
            <div className="flex gap-2 p-4 md:p-6 rounded-md bg-[#F3EEE8]">
              <Mail className="size-8 text-[#FBBB40]" /> 
              <div className="flex flex-col gap-2">
                <p className="text-lg lg:text-2xl font-bold">Mail Us</p>
                <p className="text-sm md:text-base">support@elements-learning.com</p>
              </div>
            </div>
            <div className="flex gap-2 p-4 md:p-6 rounded-md bg-[#F3EEE8]">
              <Smartphone className="size-8 text-[#FBBB40]" />
              <div className="flex flex-col gap-2">
                <p className="text-lg lg:text-2xl font-bold">Number</p>
                <p className="text-sm md:text-base">+92 333 5549094</p>
              </div>
            </div>
          </SlidingDiv>
        </div>
      </section>
      <Footer />
    </div>
  )
}