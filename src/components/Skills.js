import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const languages = [
    "JavaScript",
    "HTML/CSS",
    "Python",
    "Java",
    "C++",
    "SQL",
    "R",
  ];
  const concepts = [
    "Database",
    "Git",
    "DSA",
    "OOP",
    "Networks",
    "Web Development",
    "Data Science",
    "Machine Learning",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Skills</h2>
      <h3>Languages</h3>
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {languages.map((language, index) => (
          <motion.div
            key={language}
            className="skill"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(100, 255, 218, 0.2)",
            }}
          >
            {language}
          </motion.div>
        ))}
      </motion.div>

      <h3>Concepts</h3>
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {concepts.map((concept, index) => (
          <motion.div
            key={concept}
            className="skill"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(100, 255, 218, 0.2)",
            }}
            dangerouslySetInnerHTML={{
              __html: concept.includes("Data") ? "Data<br>Science" : concept,
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
