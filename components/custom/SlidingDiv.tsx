import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type SlidingDivProps = {
  children: React.ReactNode
  direction: "left" | "right" | "top" | "bottom"
  className?: string
  repeat?: boolean
  style?: React.CSSProperties
  id?: string
  delay?: number
  px?: number
  threshold?: number
  onClick?: ()=>void
}

export const SlidingDiv: React.FC<SlidingDivProps> = ({children, direction, className="", repeat=false, style={}, id="", delay=0, px=10, threshold=0.5, onClick=()=>{}}) => {

  const [x, y] = [
    (direction === "left" ? -px : direction === "right" ? px : 0),
    (direction === "top" ? -px : direction === "bottom" ? px : 0),
  ] 

  const { ref, inView } = useInView({
    triggerOnce: !repeat,
    threshold: threshold
  }) 

  return (
    <motion.div
      onClick={onClick}
      ref={ref} className={className}
      style={style}
      initial={{x, y, opacity: 0}}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      id={id}
    >
      {children}
    </motion.div>
  )
}
