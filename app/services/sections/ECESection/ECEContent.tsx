import { FadeIn } from "@/components/custom/FadeIn"

export const ECEContent = () => {

  return (
    <FadeIn threshold={0.01} className="flex flex-col w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl p-4 xs:p-8 sm:p-12 lg:p-16 xl:p-20 xl:px-32">
          <p>{"Navigating a child's growth involves distinct stages, and comprehending these phases is key for effective Parenting and Early Childhood Education (ECE) strategies. In the foundational preschool years (0-4), parents and ECE professionals play pivotal roles in nurturing emotional well-being, establishing a secure base for a positive self-identity. As children enter early primary (Year 4-7), parents, along with ECE educators, can support the transition from the first language (L1) to a second language (L2), capitalizing on innate language learning abilities. Progressing through late primary to early teens (Year 7-14), both parents and educators contribute to fostering intellectual growth, creating environments conducive to complex cognitive development. This sets the stage for adolescence and young adulthood (14+), where parents, educators, and mentors collaboratively encourage autonomous learning, instilling a lifelong love for exploration. By aligning Parenting and ECE strategies with these developmental stages, we aim to create supportive environments that cater to a person's evolving needs throughout their entire journey of learning and growth."}</p>
          <p>It takes a village to raise a child.</p>
        </div>
      </div>
    </FadeIn>
  )
}
