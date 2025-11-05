import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hello World! My name is Jonique";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, []);

  return (
    <section id="intro">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          <span>{displayText}</span>
          <motion.span
            className="cursor"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Computer Science and Cyber Operations Student
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Intro;
