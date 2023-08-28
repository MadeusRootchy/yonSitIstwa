import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const animationVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animationVariants}
      transition={{ duration: 1 }}
    >
      <h2>
        here you can share your story, enjoy...
      </h2>
    </motion.div>
  );
}
