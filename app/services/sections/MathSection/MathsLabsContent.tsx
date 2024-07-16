import { ContentCard } from "@/components/custom/ContentCard"
import { CustomAccordion } from "@/components/custom/CustomAccordion"
import { FadeIn } from "@/components/custom/FadeIn"
import { MultiCarousel } from "@/components/custom/MultiCarousel"
import { SlidingDiv } from "@/components/custom/SlidingDiv"
import { MathLabEvents } from "@/constants/MathLabEvents"
import { packages } from "@/constants/packages"

export const MathsLabsContent = () => {

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>The Elements Learning (EL) Math Lab is a transformative educational environment designed to make mathematics engaging and accessible for students of all ages. Our Math Labs are meticulously designed to provide a comprehensive, hands-on learning experience primarily focused on concrete manipulatives, using the CPA (Concrete-Pictorial-Abstract) Methodology.</p>
        </div>
        <section className="p-4 sm:p-8 lg:p-12 bg-[#F3EEE8]">
          <MultiCarousel items={MathLabEvents} />
        </section>
        <CustomAccordion containerClass={"w-full p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32"} type="multiple"
        items={[
          {
            title: "Packages",
            id: "Packages",
            content: 
            
            <div className="flex flex-col gap-4 py-2 xs:py-4 md:py-6 lg:py-8">
              <p className="text-base md:text-lg xl:text-xl">We offer three packages in our Maths Labs. Each package is tailored to meet the diverse needs of schools and educators.</p>    
              <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                {packages.map((pkg, i) => <ContentCard {...pkg} index={i} />)}
              </div>
            </div>

          },
          {
            title: "Lab Manuals",
            id: "Lab Manuals",
            content: 
            <div className="py-2 xs:py-4 md:py-6 lg:py-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <SlidingDiv direction={"left"} className="sm:flex-[2_0_0] aspect-[3/4] bg-neutral-400">
                  <img src="/media/IMG-20240401-WA0010.jpg" alt="" className="h-full" />
                </SlidingDiv>
                <SlidingDiv direction={"bottom"} className="flex-[3_0_0] flex flex-col  p-4 md:p-8 lg:p-10 xl:p-12 gap-4 lg:gap-6 xl:gap-8 text-xs sm:text-sm md:text-base xl:text-lg">
                  <h3 className="text-left ttext-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#FBBA41] font-bold">Our Math Lab Manuals serve as invaluable teacher's guides, meticulously designed to help educators utilize the tools and manipulatives included in our Math Lab packages.</h3>
                  <p>These manuals are crafted to provide clear, step-by-step instructions on teaching specific math concepts through hands-on activities, ensuring that both teachers and students get the most out of their math learning experience.</p>
                  <p>Each Math Lab Manual is grade-specific and aligned with the National Curriculum (NC) to fulfill defined SLO’s.</p>
                </SlidingDiv>
              </div>
            </div>
          },
        ]}
        />          
      </div>
    </FadeIn>
  )
}
