export type JourneyStep = {
  color: string
  header: string
  content: React.ReactNode
  contentBelow: boolean
}

export const journeySteps: JourneyStep[] = [
  {
    color: "#EB008B",
    header: "2009-2017",
    content: <p className="text-xs xs:text-sm md:text-xs lg:text-sm xl:text-base">Pioneered homeschooling, discovering the stark difference between children's love for learning and the traditional school experience.</p>,
    contentBelow: true
  },
  {
    color: "#00A551",
    header: "2017-2019",
    content: <p className="text-xs xs:text-sm md:text-xs lg:text-sm xl:text-base">Conducted formal training <br/>for private school while accumulating a vast knowledge base, laying the groundwork for its future endeavors.</p>,
    contentBelow: false
  },
  {
    color: "#00ADEF",
    header: "2019-2021",
    content: <p className="text-xs xs:text-sm md:text-xs lg:text-sm xl:text-base">Faced resistance to change in existing school systems, realizing the need for broader engagement from government and university sectors.</p>,
    contentBelow: true
  },
  {
    color: "#F3811F",
    header: "2021-2023",
    content: <p className="text-xs xs:text-sm md:text-xs lg:text-sm xl:text-base">Persisted in outreach efforts, securing a pivotal <strong>partnership with NUST</strong> to advance its vision for education reform.</p>,
    contentBelow: false
  },
  {
    color: "#6C3A92",
    header: "2023-Present",
    content: <p className="text-xs xs:text-sm md:text-xs lg:text-sm xl:text-base">Emerged as a NUST spinoff, poised to <strong>revolutionize K-12 education</strong> through research-based parctices and accessible resources.</p>,
    contentBelow: true
  }
]