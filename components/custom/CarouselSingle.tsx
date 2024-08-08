import { useEffect, useState } from "react"

type CarouselSingleProps = {
  containerClass: string
  items: React.ReactNode[]
  nextButton?: React.ReactNode
  prevButton?: React.ReactNode
  autoScroll?: boolean
  delay?: number
  onIndexChange?: (index: number) => void
}

export const CarouselSingle: React.FC<CarouselSingleProps> = ({containerClass, items, nextButton, prevButton, autoScroll=true, delay=3000, onIndexChange=()=>{}}) => {

  const [index, setIndex] = useState(0)
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>()
  const [paused, setPaused] = useState(false)

  useEffect(() => {

    if (paused || !autoScroll) {
      clearInterval(intervalID)
    } else {
      const id = setInterval(() => setIndex(i => (i+1)%items.length), delay)
      setIntervalID(id)
      return () => clearInterval(id)
    }

  }, [paused, autoScroll])

  useEffect(() => {
    onIndexChange(index)
  }, [index])

  return (
    <div className="size-full" 
    onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
    style={{position: "relative"}}>
      <div className={containerClass} style={{overflow: "hidden", position: "relative"}}>
        {items.map((item, i) => 
          <div key={`item-${i}`} className="absolute inset-0 transition-transform duration-300" style={{transform: `translateX(${(i-index)*100}%)`}}>
            {item}
          </div>
        )}
      </div>
      <button onClick={(e) => {e.stopPropagation(); setIndex((index+1)%items.length)}} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-black p-2">
        {nextButton}
      </button>      
      <button onClick={(e) => {e.stopPropagation(); setIndex((index-1) < 0 ? items.length-1 : (index-1)%items.length)}} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 size-fit p-2">
        {prevButton}
      </button>
      
    </div>
  )
}
