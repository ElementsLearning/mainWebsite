export type Puzzle = {
  letter: string
  header: string
  meaning: string
  color: string
  content: string
}

export const puzzles: Puzzle[] = [
  {
    letter: "P",
    header: "Play",
    meaning: "to explore",
    color: "#FBBA42",
    content: "At Elements Learning, play is essential to our methodology, fostering curiosity and creativity. Engaging in playful activities helps students explore concepts naturally, making learning enjoyable and memorable."
  },
  {
    letter: "Q",
    header: "Questioning",
    meaning: "thoughtful",
    color: "#02AEEE",
    content: "Questioning encourages critical thinking and deeper understanding. We stimulate students' inquisitiveness, guiding them to ask insightful questions that drive their learning journey and uncover new knowledge."
  },
  {
    letter: "R",
    header: "Reflective",
    meaning: "practice",
    color: "#75BF44",
    content: "Reflection allows students to consolidate their learning experiences. By pondering their actions and thoughts, they gain a clearer understanding of concepts, fostering personal growth and intellectual development."
  },
  {
    letter: "S",
    header: "Storytelling",
    meaning: "immersive",
    color: "#6C3A94",
    content: "Storytelling enriches the learning process by connecting knowledge with real-life contexts. Narratives help students relate to the material, making it more engaging and memorable, while also enhancing their communication skills."
  },
  {
    letter: "T",
    header: "Transfer",
    meaning: "knowledge",
    color: "#E03697",
    content: "Transfer ensures that students can apply their acquired knowledge and skills to various contexts. By promoting the practical application of learning, we prepare students for success in diverse situations and future challenges."
  },
]