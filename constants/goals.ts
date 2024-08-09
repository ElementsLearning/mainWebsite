export type Goal = {
  color: string
  innerBg: string
  title: string
  src: string
  content: string
}

export const goals: Goal[] = [
  {
    color: "#CAB9DB",
    innerBg: "#A98CC2",
    title: "Quality",
    src: "/aboutpage/quality.png",
    content: "We are committed to delivering high-quality learning experiences through innovative methodologies and assessment frameworks, empowering students to unlock their full potential and thrive academically and personally."
  },
  {
    color: "#CFE8BE",
    innerBg: "#B1DA94",
    title: "Relevance",
    src: "/aboutpage/relevance.png",
    content: "Our focus is on delivering engaging and relevant educational experiences that prepare students for success in life in a rapidly evolving world and changing market landscape."
  },
  {
    color: "#A7E4F9",
    innerBg: "#6DD1F5",
    title: "Access",
    src: "/aboutpage/access.png",
    content: "We prioritize accessibility by providing easily accessible learning resources for Students, parents and teachers, ensuring seamless learning experiences for all.",
  },
]