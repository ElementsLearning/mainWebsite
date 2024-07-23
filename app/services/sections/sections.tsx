import { ECEContent } from "./ECESection/ECEContent"
import { EdTechContent } from "./EdTechSection/EdTechContent"
import { LanguageContent } from "./LanguageSection/LanguageContent"
import { AssessmentsContent } from "./MathSection/AssessmentsContent"
import { MathsLabsContent } from "./MathSection/MathsLabsContent"
import { MathsManipulativesContent } from "./MathSection/MathsManipulativesContent"
import { PublicationsContent } from "./MathSection/Publications/PublicationsContent"
import { TrainingsContent } from "./MathSection/Training/TrainingsContent"
import { ScienceContent } from "./ScienceSection/ScienceContent"
import { SocialSciencesContent } from "./SocialSciencesSection/SocialSciencesContent"
import { SteamContent } from "./SteamSection/SteamContent"

export type Tab = {
  name: string
  src: string
  tabName: string
  content: React.ReactNode
}

export type Section = {
  name: string
  serviceName: string
  color: string
  src: string
  videoSrc?: string
  tabs?: Tab[]
  content?: React.ReactNode
}

export const sections: Section[] = 
[
  {
    name: "Maths",
    serviceName: "maths",
    color: "#FBBA42",
    videoSrc: "/animations/mathYellow.mp4",
    src: "/landingpage/maths.png",
    tabs: [
      {
        name: "Publications",
        src: "/whatweofferpage/maths/publication.png",
        tabName: "publications",
        content: <PublicationsContent />
      },
      {
        name: "Trainings",
        src: "/whatweofferpage/maths/trainings.png",
        tabName: "trainings",
        content: <TrainingsContent />
      },
      {
        name: "Maths Lab",
        src: "/whatweofferpage/maths/maths-lab.png",
        tabName: "labs",
        content: <MathsLabsContent />
      },
      {
        name: "Manipulatives",
        src: "/whatweofferpage/maths/maths-manipulatives.png",
        tabName: "manipulatives",
        content: <MathsManipulativesContent />
      },
      // {
      //   name: "Assessments",
      //   src: "/whatweofferpage/maths/assessments.png",
      //   tabName: "assessments",
      //   content: <AssessmentsContent />
      // },
    ],
  },
  {
    name: "Early Childhood Education",
    serviceName: "ece",
    color: "#DA037F50",
    src: "/landingpage/ece.png",
    content: <ECEContent />
  },
  {
    name: "Language",
    serviceName: "language",
    color: "#307F0150",
    src: "/landingpage/language.png",
    content: <LanguageContent />
  },
  {
    name: "STEAM",
    serviceName: "steam",
    color: "#00678F50",
    src: "/landingpage/steam.png",
    content: <SteamContent />
  },
  {
    name: "EdTech",
    serviceName: "edtech",
    color: "#DA037F50",
    src: "/landingpage/edtech.png",
    content: <EdTechContent />
  },
  {
    name: "Science",
    serviceName: "science",
    color: "#55088C50",
    src: "/landingpage/science.png",
    content: <ScienceContent />
  },
  {
    name: "Social Science",
    serviceName: "socialscience",
    color: "#007E3D50",
    src: "/landingpage/socialscience.png",
    content: <SocialSciencesContent />
  },
]
