export type FlowChartStep = {
  name: string
  color: string
  corner: string
  content: string
  optionals?: {
    name: string
    corner: string
    content: string
  }[]
}

export const flowchartSteps: FlowChartStep[] = [
  {
    name: "Sensitization Session",
    color: "#C5AECB",
    content: "Introduce the innovative, research-based teaching methodologies developed by Elements Learning (EL) to enhance the quality of math education. This session aims to familiarize educators with new strategies and tools to foster a deeper understanding of mathematical concepts.",
    corner: "br",
  },
  {
    name: "Critical Foundational Concepts",
    color: "#9FD5B5",
    content:"Equip math teachers with the knowledge and skills to teach Critical Foundation Concepts (CFC) using the globally recognized CPA (Concrete > Pictorial > Abstract) methodology. This training emphasizes practical applications and evidence-based techniques to improve problem-solving abilities.",
    corner: "tr",
    optionals: [
      {
        name: "Train the Trainer",
        content: "Develop Master Maths Trainers (MMTs) through rigorous training on effective communication, interactive teaching, and creating engaging math activities. This program prepares selected teachers to mentor others and ensure the sustainable implementation of EL methodologies.",
        corner: "bl"
      },
      {
        name: "Induction Training",
        content: "Provide newly recruited teachers with an overview of EL's math teaching methodologies, tools, and resources. This training ensures that all educators are aligned with the best practices and equipped to deliver high-quality math education from the start.",
        corner: "tl"
      },
    ]
  },
  {
    // name: "Class Assessment / Assessment for Learning",
    name: "Maths Teachers Training Audit",
    content: "Conduct thorough audits of Maths Teachers' training sessions to ensure adherence to EL methodologies and provide constructive feedback. This phase focuses on maintaining the quality and effectiveness of the training provided by educators and ensuring continuous improvement.",
    color: "#9FD8EB",
    corner: "br",
  },
  {
    name: "Student Learning Impact Analysis",
    content: "Assess the impact of EL's math teaching methodologies on student performance through comprehensive evaluations and Math Olympiads. This analysis helps gauge the effectiveness of the training programs and identify areas for further improvement.",
    color: "#F2CBAC",
    corner: "tr",
  },
]