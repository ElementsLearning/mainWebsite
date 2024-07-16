import { FadeIn } from "@/components/custom/FadeIn"

export const EdTechContent = () => {

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>The Elements Learning (EL) Math Lab is a transformative educational environment designed to make mathematics engaging and accessible for students of all ages. Our Math Labs are meticulously designed to provide a comprehensive, hands-on learning experience primarily focused on concrete manipulatives, using the CPA (Concrete-Pictorial-Abstract) Methodology.</p>
        </div>
      </div>
    </FadeIn>
  )
}
