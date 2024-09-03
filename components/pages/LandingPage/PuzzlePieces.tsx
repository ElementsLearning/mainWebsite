import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { Puzzle, puzzles } from "@/constants/puzzles";
import { motion } from 'framer-motion';
import { useState } from "react";
import { useInView } from 'react-intersection-observer';

type PieceProps = Puzzle & {
  showTab: boolean
  reverseOrder: boolean
  order: number
}

const PuzzlePiece: React.FC<PieceProps> = ({letter, header, meaning, color, showTab, content, reverseOrder, order}) => {
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      }
    }
  };

  return (
    <motion.div variants={itemVariants} className="relative flipping-card-parent group text-white flex-1 h-full" style={{backgroundColor: color, zIndex: order}}>
      {showTab && <div className="absolute size-4 xs:size-6 sm:size-8 md:size-10 lg:size-14 xl:size-16 rounded-sm bg-white right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45" style={{backgroundColor: color}}/>}
      <div className='w-full h-full flipping-card group text-[8px] sm:text-sm md:text-base lg:text-lg xl:text-2xl'>
        <div className='size-full min-[400px]:group-hover:hidden flex flex-col justify-center items-center gap-px md:gap-1 lg:gap-2'>
          <p className="font-bold text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl">{letter}</p>
          <div className={`flex ${reverseOrder ? "flex-col-reverse" : "flex-col"} min-w-[60%]`}>
            <p className="uppercase text-center sm:tracking-wider md:tracking-widest">{header}</p>
            <p className="flex justify-center items-center gap-1 w-full text-xs lg:text-sm xl:text-base">
              <span className="flex-1 hidden min-[950px]:block h-0 border border-white "/>
                {meaning}
              <span className="flex-1 hidden min-[950px]:block h-0 border border-white "/>
            </p>
          </div>
        </div>
        <div className='size-full min-[400px]:group-hover:flex flipped-content-anti hidden flex-col justify-center items-center gap-2 leading-none text-[8px] md:text-[11px] lg:text-sm xl:text-base px-6 drop-shadow-xl'>
          {content}
        </div>
      </div>
    </motion.div>
  )
}

export const PuzzlePieces = () => {

  const containerVariants = {
    hidden: { x: 0, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [showTabs, setShowTabs] = useState(true)

  const [showContent, setShowContent] = useState([false, false, false, false, false])

  const toggleContent = (index: number) => {
    setShowContent(sc => sc.map((c, i) => i !== index ? c : !c))
  }

  return (
    <>
    <motion.div
    ref={ref}
    className='hidden sm:flex h-16 xs:h-24 sm:h-36 md:h-48 lg:h-64 xl:h-80'
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={containerVariants}
    onMouseEnter={() => setShowTabs(false)}
    onMouseLeave={() => setShowTabs(true)}
    >
    {puzzles.map((puzzle, i) => 
      <PuzzlePiece key={`puzzle-${i}`} reverseOrder={i % 2 === 1} showTab={showTabs && i !== puzzles.length - 1} {...puzzle} order={puzzles.length - i} />
    )}
    </motion.div>

    {/*- Mobile View */}
    <div className='flex sm:hidden flex-col text-white'>
      <div className="grid grid-cols-2 grid-rows-3 ">
        <SlidingDiv onClick={() => toggleContent(0)} direction={"left"} className="aspect-square relative p-1" style={{backgroundColor: puzzles[0].color, zIndex: puzzles.length - 0}}>
          {showContent[1] === false && <div className="absolute size-10 rounded-md right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45" style={{backgroundColor: puzzles[0].color}}/>}
          
          <div className='size-full flex flex-col justify-center items-center gap-2'>
            {showContent[0] ? <p style={{zIndex: 10}} className="text-xs xs:text-sm min-[550px]:text-base">{puzzles[0].content}</p> :
            <>
            <p className="font-bold text-5xl">{puzzles[0].letter}</p>
            <div className={`flex flex-col`}>
              <p className="uppercase text-center tracking-widest">{puzzles[0].header}</p>
              <p className="flex justify-center items-center gap-1 w-full">
                <span className="flex-1 h-0 border border-white "/>
                  {puzzles[0].meaning}
                <span className="flex-1 h-0 border border-white "/>
              </p>
            </div>
            </>}
          </div>
        </SlidingDiv>
        <SlidingDiv onClick={() => toggleContent(1)} direction={"top"} delay={0.2} className="aspect-square relative p-1" style={{backgroundColor: puzzles[1].color, zIndex: puzzles.length - 1}}>
          {showContent[2] === false && <div className="absolute size-10 rounded-md right-1/2 bottom-0 translate-x-1/2 translate-y-1/2 rotate-45" style={{backgroundColor: puzzles[1].color}}/>}
          
          <div className='size-full flex flex-col justify-center items-center gap-2'>
            {showContent[1] ? <p style={{zIndex: 10}} className="text-xs xs:text-sm min-[550px]:text-base">{puzzles[1].content}</p>:
            <>
            <p className="font-bold text-5xl">{puzzles[1].letter}</p>
            <div className={`flex flex-col-reverse`}>
              <p className="uppercase text-center tracking-widest">{puzzles[1].header}</p>
              <p className="flex justify-center items-center gap-1 w-full">
                <span className="flex-1 h-0 border border-white "/>
                  {puzzles[1].meaning}
                <span className="flex-1 h-0 border border-white "/>
              </p>
            </div>
            </>}
          </div>
        </SlidingDiv>
        <SlidingDiv onClick={() => toggleContent(2)} direction={"top"} delay={0.4} className="col-span-2 relative p-1" style={{backgroundColor: puzzles[2].color, zIndex: puzzles.length - 2}}>
          {showContent[3] === false && <div className="absolute size-10 rounded-md left-1/4 bottom-0 -translate-x-1/2 translate-y-1/2 rotate-45" style={{backgroundColor: puzzles[2].color}}/>}
          
          <div className='size-full flex flex-col justify-center items-center gap-2'>
            {showContent[2] ? <p style={{zIndex: 10}} className="text-xs xs:text-sm min-[550px]:text-base">{puzzles[2].content}</p>:
            <>
            <p className="font-bold text-5xl">{puzzles[2].letter}</p>
            <div className={`flex flex-col`}>
            <p className="uppercase text-center tracking-widest">{puzzles[2].header}</p>
              <p className="flex justify-center items-center gap-1 w-full">
                <span className="flex-1 h-0 border border-white "/>
                  {puzzles[2].meaning}
                <span className="flex-1 h-0 border border-white "/>
              </p>
            </div>
            </>}
          </div>
        </SlidingDiv>
        <SlidingDiv onClick={() => toggleContent(3)} direction={"left"} delay={0.6} className="aspect-square relative p-1" style={{backgroundColor: puzzles[3].color, zIndex: puzzles.length - 3}}>
          {showContent[4] === false && <div className="absolute size-10 rounded-md right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45" style={{backgroundColor: puzzles[3].color}}/>}
          
          <div className='size-full flex flex-col justify-center items-center gap-2'>
            {showContent[3] ? <p style={{zIndex: 10}} className="text-xs xs:text-sm min-[550px]:text-base">{puzzles[3].content}</p>:
            <>
            <p className="font-bold text-5xl">{puzzles[3].letter}</p>
            <div className={`flex flex-col-reverse`}>
            <p className="uppercase text-center tracking-widest">{puzzles[3].header}</p>
            <p className="flex justify-center items-center gap-1 w-full">
            <span className="flex-1 h-0 border border-white "/>
            {puzzles[3].meaning}
            <span className="flex-1 h-0 border border-white "/>
            </p>
            </div>
            </>}
          </div>
        </SlidingDiv>
        <SlidingDiv onClick={() => toggleContent(4)} direction={"right"} delay={0.8} className="aspect-square relative p-1" style={{backgroundColor: puzzles[4].color, zIndex: puzzles.length - 4}}>          
          <div className='size-full flex flex-col justify-center items-center gap-2'>
            {showContent[4] ? <p style={{zIndex: 10}} className="text-xs xs:text-sm min-[550px]:text-base">{puzzles[4].content}</p>:
            <>
            <p className="font-bold text-5xl">{puzzles[4].letter}</p>
            <div className={`flex flex-col`}>
            <p className="uppercase text-center tracking-widest">{puzzles[4].header}</p>
            <p className="flex justify-center items-center gap-1 w-full">
            <span className="flex-1 h-0 border border-white "/>
                  {puzzles[4].meaning}
                <span className="flex-1 h-0 border border-white "/>
              </p>
            </div>
            </>}
          </div>
        </SlidingDiv>
      </div>
    </div>
    </>
  )
}