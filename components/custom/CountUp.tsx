

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type CountUpProps = {
  start?: number
  end: number
  increment: number
  delay: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  isInt?: boolean
}

export const CountUp: React.FC<CountUpProps> = ({start=0, end, duration=3000, increment, delay, prefix="", suffix="", isInt=true, className=""}) => {
  
  const [value, setValue] = useState(start)
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>()
  const { ref, inView } = useInView();

  const _increment = increment || (end - start) / duration
  const _delay = delay || duration / (end - start)

  useEffect(() => {
    if (inView) {
      const counter = setInterval(() => {
        setValue(prevValue => {
          const nextValue = prevValue + _increment
          if (nextValue > end) {
            clearInterval(counter)
            return end
          }
          return isInt ? Math.floor(nextValue) : nextValue
        })
      }, _delay)

      setIntervalID(counter)
    }
    else {
      setValue(start)
      clearInterval(intervalID)
      setIntervalID(undefined)
    }
  }, [inView])
  
  return (
    <p className={className} ref={ref}>
      {`${prefix}${value}${suffix}`}
    </p>
  )
}
