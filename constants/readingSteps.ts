type ReadingStep = {
  heading: string
  text: string
  src: string
  color: string
  scale?: number
  translateY?: number
  translateX?: number
}

export const readingSteps: ReadingStep[] = [
  {
    heading: "L1",
    text: "Introduction to basic language skills with a focus on foundational vocabulary and simple sentences.",
    color: "#F3811F",
    src: "/language/reading/1.png",
    scale: 120
  },
  {
    heading: "L1 -> L2",
    text: "Transitioning from the first language (L1) to a second language (L2), building bilingual skills.",
    color: "#EB008B",
    src: "/language/reading/2.png",
    scale: 80
  },
  {
    heading: "GK + VOCAB",
    text: "Expanding general knowledge and vocabulary to build a well-rounded unerstanding of the world.",
    color: "#04BA56",
    src: "/language/reading/3.png",
    scale: 70,
    translateY: -5
  },
  {
    heading: "VOCAB 200",
    text: "Achieving a milestone of 200 essential words for effective communication and comprehension.",
    color: "#453A91",
    src: "/language/reading/4.png",
    scale: 150
  },
  {
    heading: "THINKING SKILLS",
    text: "Developing critical thinking and problem-solving abilities through advanced language exercises.",
    color: "#00ADEF",
    src: "/language/reading/5.png",
    scale: 80,
    translateY: -12
  },
  {
    heading: "BOOKLETS",
    text: "Reading and comprehending small books to reinforce language skills.",
    color: "#6C3A92",
    src: "/language/reading/6.png",
  },
  {
    heading: "LITERATURE & BOOK REVIEW",
    text: "Engaging deeply with literature, developing the ability to read critically and review books.",
    color: "#F10229",
    src: "/language/reading/7.png",
    translateY: -20,
    translateX: -5
  },
]