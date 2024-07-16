export type Assessment = {
  headers: string | string[]
  color: string
  content: string
  corner: string
  highlight: string
  number: string
}

export const studentAssessments: Assessment[] = [
  {
    headers: ["In-Book", "Assessments"],
    color: "#9FD8EB",
    content: "Our math textbooks include a variety of assessments embedded within the chapters to evaluate students' understanding and mastery of mathematical concepts. These assessments may include formative quizzes, exercises, and problems designed to assess comprehension, application, and critical thinking skills.",
    corner:"tr",
    highlight: "#2D7CEA",
    number: "01"
  },
  {
    headers: ["Chapter End", "Assessments"],
    color: "#C5AECB",
    content: "At the conclusion of each chapter, students encounter comprehensive assessments that test their proficiency in the covered material. These assessments may include a mix of multiple-choice questions, short-answer problems, and hands-on activities to assess various dimensions of learning.",
    corner:"br",
    highlight: "#66378A",
    number: "02"
    
  },
  {
    headers: ["Periodic", "Review"],
    color: "#C7DFAF",
    content: " Throughout the academic year, students engage in periodic reviews and assessments to consolidate their learning and identify areas for improvement including assessments for hands-on learning of using the tools. These assessments may take the form of unit tests, quizzes, or projects, providing students with opportunities to demonstrate their progress and receive feedback on their performance.",
    corner:"tr",
    highlight: "#74C045",
    number: "03"
  },
  
]