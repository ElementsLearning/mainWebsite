
export type Content = {
  headers: string[]
  color: string
  content: string | string[]
}

export const packages: Content[] = [
  {
    headers: ["Basic", "Maths Lab"],
    color: "#75BF46",
    content: [
      "Perfect for schools new to hands-on math learning.",
      "Includes five fundamental tools and manipulatives.",
      "Designed to cover key math concepts.",
      "Initiates interactive math learning.",
      "Improves understanding through concrete and pictorial representations.",

    ]
  },
  {
    headers: ["Standard", "Maths Lab"],
    color: "#02AEEE",
    content: [
      "Builds on the Basic package.",
      "Offers a wider range of tools and resources.",
      "Includes all items in the Basic package.",
      "Additional manipulatives and activities for complex math topics.",
      "Supports a more comprehensive math curriculum.",

    ]
  },
  {
    headers: ["Premium", "Maths Lab"],
    color: "#6C3694",
    content: [
      "Ideal for schools aiming to provide an enriched math learning experience.",
      "Includes everything in the Standard package.",
      "Premium tools, technology integration, and advanced activity tools.",
      "Furniture designed around math learning.",

    ]
  },
]