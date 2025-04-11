import { HexagonPlayButton } from "@/components/custom/HexagonPlayButton"
import { PlusIcon } from "lucide-react"
import { useOnEscape } from "@/lib/hooks/useOnEscape"
import { useState } from "react"

type FAQ = {
  question: string
  answer: string
}

const FAQs: FAQ[] = [
  {
    question: "What is Elements Learning (EL)?",
    answer: "Elements Learning (EL) is an innovative educational platform dedicated to transforming the learning experience for students, educators, and parents. EL offers a comprehensive suite of resources, including textbooks, teacher Trainings, interactive learning tools, E-tutoring and assessment materials, designed to enhance teaching and learning across various subjects and grade levels. With a focus on access, relevance, and quality, EL aims to empower educators, inspire learners, and foster a lifelong love for learning."
  },
  {
    question: "Are Elements Learning's products suitable for both teachers and parents?",
    answer: "Yes, Elements Learning's products are suitable for both teachers and parents. Our math tools such as Tangram, Geoboard, Circular Geoboard, Base Ten Blocks, and Fraction Board, which are not only engaging for students but also come with manuals and guides that assist teachers in implementing effective teaching strategies and parents in facilitating meaningful learning activities at home. Whether used in the classroom or at home, our products are tailored to provide valuable support and resources for educators and parents alike, fostering collaboration and enhancing the learning journey for every learner. "
  },
  {
    question: "What educational services does EL offer?",
    answer: "EL offers a wide range of educational services, including textbooks, teacher training programs, math manipulative tools, Math Olympiads, and recreational math programs. Our services are designed to enhance teaching and learning experiences, empower educators with effective tools and strategies, inspire students to explore the world of mathematics, and foster a lifelong love for learning."
  },
  {
    question: "Are math manipulative tools safe for children to use?",
    answer: "Yes, math manipulative tools provided by EL are designed with safety in mind. We ensure that our tools meet safety standards and regulations to provide a safe learning environment for children. Additionally, our materials are carefully selected and tested to ensure durability and suitability for educational purposes. We recommend supervision by adults while children are using the manipulative tools to ensure safe and effective learning experiences."
  },
  {
    question: "What sets EL apart from other educational platforms?",
    answer: "EL stands out from other educational platforms due to its comprehensive approach to learning, innovative teaching methodologies, and commitment to quality. Our resources are designed to cater to the diverse needs of students, educators, and parents, offering a wide range of tools and materials to support teaching and learning across various subjects and grade levels. Additionally, our focus on access, relevance, and quality ensures that our products are effective and impactful, empowering educators and inspiring learners to reach their full potential."
  },
]

export const FAQSection = () => {

  const [opened, setOpened] = useState<FAQ>()
  useOnEscape(() => setOpened(undefined))

  return (
    <>
      {opened && (
        <div onClick={() => setOpened(undefined)} className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-4 sm:p-8">
          <div onClick={(e) => e.stopPropagation()} className="w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 bg-white rounded-[20px] sm:rounded-br-none rounded-br-none sm:rounded-[50px] flex flex-col p-6 gap-2 lg:p-12">
            <p className="font-bold text-[#FBBA41] text-lg sm:text-2xl md:text-3xl lg:text-4xl">{opened.question}</p>
            <p className="text-sm sm:text-base lg:text-lg p-2 md:p-4">{opened.answer}</p>
          </div>
        </div>
      )}
      <div className="flex-1 flex flex-col gap-4">
        <div className="xl:flex hidden p-2 px-4 rounded-full rounded-br-none bg-[#FBBA41] font-bold">FAQs</div>
        <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white text-lg">FAQs</div>
        <div className="flex-1 flex flex-col gap-4 xl:gap-8 text-white">
          <p className="text-xs md:text-base">
            {"Got questions? We've got answers. Explore our frequently asked questions to find everything you need to know about Elements Learning and our educational offerings. Whether it's about out products, services, or educational philosophy, we're here to provide clarity and support your learning journey."}
          </p>
          <div className="flex flex-col text-sm md:text-bas md:px-4 gap-2 xl:px-8">
            {FAQs.map(faq => 
              <div key={faq.question} onClick={() => setOpened(faq)} className="flex items-center gap-2 cursor-pointer">
                <div className="size-10">
                  <HexagonPlayButton outerColor="#FABB41" />
                </div>
                <div className="flex flex-1 gap-2 justify-between items-center border-b hover:border-white border-neutral-300">
                  <p className="flex items-end py-1 w-full">{faq.question}</p>
                  <PlusIcon className="size-6" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
