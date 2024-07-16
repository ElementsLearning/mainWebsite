import { FadeIn } from "@/components/custom/FadeIn"

export const SocialSciencesContent = () => {

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>At Elements Learning, we recognize the importance of Social Sciences in understanding human behavior, societies, and the world we live in. Our upcoming Social Sciences program will offer comprehensive resources and interactive materials that cover history, geography, civics, and cultural studies. By integrating these subjects with real-world applications, we aim to foster critical thinking, empathy, and a deep understanding of global interconnectedness. Our approach will emphasize inquiry-based learning, encouraging students to explore, question, and connect with diverse perspectives and experiences. This program is designed to prepare students to become informed, responsible, and active citizens in an increasingly complex and dynamic world.
          </p>
        </div>
      </div>
    </FadeIn>
  )
}
