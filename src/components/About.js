<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about-me"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About-Me</h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm Jonique (jo-nick, like unique!), a curious learner and innovative
        problem-solver with an interest in software development, machine
        learning and honestly anything that utilizes code. Whether I'm diving
        into new projects or brainstorming solutions, I am always bringing a
        fresh perspective and keen attention to detail in everything I do. I
        love being able to do work that is both challenging, rewarding and have
        a real-world impact!
      </motion.p>
    </motion.section>
  );
};

export default About;
=======
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about-me"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>About-Me</h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I'm Jonique (jo-nick, like unique!), a curious learner and innovative
        problem-solver with an interest in software development, machine
        learning and honestly anything that utilizes code. Whether I'm diving
        into new projects or brainstorming solutions, I am always bringing a
        fresh perspective and keen attention to detail in everything I do. I
        love being able to do work that is both challenging, rewarding and have
        a real-world impact!
      </motion.p>
    </motion.section>
  );
};

export default About;
>>>>>>> 3f5aae4d805f7b64fe5ec62314d192f7b17af6e4
