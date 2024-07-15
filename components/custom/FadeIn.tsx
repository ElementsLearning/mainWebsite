import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type FadeInProps = {
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  allowed?: boolean;
  className?: string  
  style?: React.CSSProperties
}

export const FadeIn: React.FC<FadeInProps> = ({ children=<></>, delay=0, duration=0.5, threshold=0.1, allowed=true, className="", style={}, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: threshold // Trigger when 10% of the component is in view
  });

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        duration
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};
