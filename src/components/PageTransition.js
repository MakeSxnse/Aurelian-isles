"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSection({ children, className, noClip = false }) {
  const variants = {
    hidden: { 
      clipPath: noClip ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)",
      y: 30,
      opacity: 0
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      opacity: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1]
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}



