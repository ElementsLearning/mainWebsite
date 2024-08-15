import { FadeIn } from "@/components/custom/FadeIn"
import { LearningToRead } from "./LearningToRead"
import { LearningToReadMobile } from "./LearningToReadMobile"
import { SlidingDiv } from "@/components/custom/SlidingDiv"

export const LanguageContent = () => {

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>{`Math and language are foundational to all knowledge, serving as crucial tools for understanding and expressing ideas. Adhering to the principles of Mother Tongue Based Multilingual Education (MTB MLE), we begin a child's learning journey with their first language (L1) as the cornerstone. As they progress, we seamlessly integrate MTB MLE into transitioning from L1 to a second language (L2), broadening linguistic capabilities while preserving the richness of the mother tongue. Subsequent stages, including General Knowledge and Vocabulary, embrace the principles of MTB MLE, celebrating linguistic diversity. From the Emotional Wheel to "Who am I" and the development of Thinking Skills, we respect and incorporate cultural nuances in language. Guiding them from learning to read to reading to learn, our goal is to empower children to become authors, sharing unique perspectives within the MTB MLE framework that values and preserves each child's linguistic and cultural identity.`}</p>
        </div>
        <div className={"relative flex flex-col gxap-2"}>
          <SlidingDiv direction={"right"} px={75}>
            <h3 className="px-4 text-3xl min-[950px]:text-5xl min-[950px]:text-center font-bold uppercase">Learn to Read...Read To Learn</h3>
          </SlidingDiv>
          <LearningToRead />
          <LearningToReadMobile />
        </div>
      </div>
    </FadeIn>
  )
}
