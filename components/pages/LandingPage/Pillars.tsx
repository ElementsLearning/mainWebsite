import { SlidingDiv } from "../../custom/SlidingDiv";
import { VideoPlayer } from "@/components/custom/VideoPlayer";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StaggeredPillarHeader = () => {
  const containerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 100 },
        duration: 0.5
      }
    }
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex sm:flex-col sm:items-end "
      >
        <motion.h2 className="text-8xl xs:text-[10rem] md:text-[12rem] leading-none lg:text-[16rem] font-bold" variants={itemVariants}>
          4
        </motion.h2>
        <div className='flex flex-col justify-center sm:items-end'>
          <motion.h3 className="text-5xl xs:text-6xl lg:text-8xl font-semibold uppercase" variants={itemVariants}>
            Pillars
          </motion.h3>
          <motion.h5 className="text-3xl xs:text-4xl md:text-5xl lg:text-7xl font-thin" variants={itemVariants}>
            of Education
          </motion.h5>
        </div>
      </motion.div>
  );
};

export const Pillars = () => {

  return (
    <>
    <div className="flex gap-4 sm:gap-8 md:gap-16 w-full flex-col sm:flex-row justify-center sm:items-end">
      <StaggeredPillarHeader />
      <div className="flex flex-col items-start gap-2 md:gap-4">
        <SlidingDiv className='relative flex-1' direction="right" px={50}>
          <VideoPlayer src="/animations/PillarsShort.mp4" className="w-full sm:w-[400px] lg:w-[550px]" />
          {/* <img src="/landingpage/pillars.png" className="w-full sm:w-[400px] lg:w-[550px]" /> */}
        </SlidingDiv>
        <SlidingDiv direction="bottom" px={70} delay={0.3}  className="grid grid-cols-2 min-[400px]:flex w-full text-xs xs:text-sm lg:text-base justify-between lg:justify-center place-items-center xs:place-items-start gap-y-10 lg:gap-20 flex-1">
          <div className="flex  flex-col gap-1 font-bold items-center size-16">
            <img src="/landingpage/teachingmaterial.png" className="lg:scale-125" alt="" />
            <div className="flex flex-col items-center">
              <p>Teaching</p>
              <p>Material</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 font-bold items-center size-16">
            <img src="/landingpage/teacherstraining.png" className="lg:scale-125" alt="" />
            <div className="flex flex-col items-center">
              <p>Teacher</p>
              <p>Training</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 font-bold items-center size-16">
            <img src="/landingpage/assessments.png" className="lg:scale-125" alt="" />
            <div className="flex flex-col items-center">
              <p>Assessments</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 font-bold items-center size-16">
            <img src="/landingpage/schoolleaderships.png" className="lg:scale-125" alt="" />
            <div className="flex flex-col items-center">
              <p>School</p>
              <p>Leadership</p>
            </div>
          </div>
        </SlidingDiv>
      </div>
    </div>
    <SlidingDiv direction="bottom" px={50}>
    <div className="xl:px-20">
      <p className="sm:text-lg text-center">
      Quality education, as <strong>envisioned by Elements Learning</strong>, rides on the sturdy foundation of four crucial components: well-crafted teaching materials that <i>engage and enlighten</i>, continuous teacher training that <i>inspires and empowers</i>, rigorous assessments to measure <i>progress and potential</i>, and dynamic school leadership to <i>steer towards excellence.</i> These elements form the backbone of a <strong>holistic educational journey</strong>, fostering intellectual, emotional, and spiritual growth in students.</p>
    </div>
    </SlidingDiv>
    </>
  )
}