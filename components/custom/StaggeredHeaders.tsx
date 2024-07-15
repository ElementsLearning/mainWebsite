import React from 'react';
import { motion } from 'framer-motion';

type StaggeredHeadersProps = {
  headers: string[]
  containerClass?: string
  direction?: "left" | "right" | "top" | "bottom"
  px?: number
}

export const StaggeredHeaders: React.FC<StaggeredHeadersProps> = ({headers, containerClass="", direction="left", px=100}) => {

  const [x, y] = [
    (direction === "left" ? -px : direction === "right" ? px : 0),
    (direction === "top" ? -px : direction === "bottom" ? px : 0),
  ] 

  const containerVariants = {
    hidden: { x, y, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { x, y, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 80 },
        duration: 0.3
      }
    }
  };

  return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={containerClass}
      >
        {headers.map(header => <motion.h2 key={header} variants={itemVariants}>{header}</motion.h2>)}
      </motion.div>
  );
};

