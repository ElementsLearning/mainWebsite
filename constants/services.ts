type Service = {
  title: string
  disabled: boolean
  content: string
  videoSrc?: string
  illustrationSrc: string
  link: string
  linkText: string
  color: string
}

export const services: Service[] = [
  {
    title: "Maths",
    disabled: false,
    content: "Enhancing math education with innovative resources like Maths Labs, interactive corners, and recreational activities, all based on the CPA methodology for deeper understanding.",
    illustrationSrc: "/landingpage/maths.png",
    videoSrc: "/animations/math.mp4",
    link: "/services/maths/publications",
    linkText: "Learn more",
    color: "#D36E0850"
  },
  {
    title: "Language",
    disabled: false,
    content: " Promoting multilingual education by starting with the mother tongue and transitioning to additional languages, fostering cultural richness and effective communication skills.",
    illustrationSrc: "/landingpage/language.png",
    videoSrc: "/animations/language.mp4",
    link: "/services/language",
    linkText: "Learn more",
    color: "#307F0150"
  },
  {
    title: "Science",
    disabled: false,
    content: " Making science engaging and hands-on with 'Science Tamasha,' encouraging active participation and curiosity through experiments and interactive learning.",
    illustrationSrc: "/landingpage/science.png",
    videoSrc: "/animations/science.mp4",
    link: "/services/science",
    linkText: "Learn more",
    color: "#55088C50"
  },
  {
    title: "Early Childhood Education (ECE) and Parenting",
    disabled: true,
    content: " Supporting children's growth through targeted Early Childhood Education (ECE) and parenting strategies, ensuring a nurturing environment from preschool to young adulthood.",
    illustrationSrc: "/landingpage/ece.png",
    videoSrc: "/animations/ece.mp4",
    link: "/services/ece",
    linkText: "Learn more",
    color: "#DA037F50"
  },
  {
    title: "Social Science",
    disabled: true,
    content: "Comprehensive resources and interactive materials covering history, geography, civics, and cultural studies to foster critical thinking and global understanding.",
    illustrationSrc: "/landingpage/socialscience.png",
    videoSrc: "/animations/socialscience.mp4",
    link: "/services/socialscience",
    linkText: "Learn more",
    color: "#007E3D50"
  },
  {
    title: "Connected Learning (STEAM)",
    disabled: true,
    content: " Integrating history and geography with real-life contexts, our Connected Learning approach builds a holistic understanding of the world and its interconnected elements.",
    illustrationSrc: "/landingpage/steam.png",
    videoSrc: "/animations/steam.mp4",
    link: "/services/steam",
    linkText: "Learn more",
    color: "#00678F50"
  },
  {
    title: "Ed Tech",
    disabled: true,
    content: "Leveraging technology to enhance learning through interactive tools, adaptive learning paths, and advanced analytics, bridging traditional and modern education for the 21st century.",
    illustrationSrc: "/landingpage/edtech.png",
    videoSrc: "/animations/edtech.mp4",
    link: "/services/edtech",
    linkText: "Learn more",
    color: "#D86B1050"
  }
]
