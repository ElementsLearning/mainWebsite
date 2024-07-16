export type FlowChartStep = {
  name: string
  color: string
  corner: string
  optionals?: {
    name: string
    corner: string
  }[]
}

export const flowchartSteps: FlowChartStep[] = [
  {
    name: "Sensitization Session",
    color: "#C5AECB",
    corner: "br",
  },
  {
    name: "Critical Fundamental Concepts",
    color: "#9FD5B5",
    corner: "tr",
    optionals: [
      {
        name: "Train the Trainer",
        corner: "bl"
      },
      {
        name: "Induction Training",
        corner: "tl"
      },
    ]
  },
  {
    name: "Class Assessment / Assessment for Learning",
    color: "#9FD8EB",
    corner: "br",
  },
  {
    name: "Student Learning Impact Analysis",
    color: "#F2CBAC",
    corner: "tr",
  },
]