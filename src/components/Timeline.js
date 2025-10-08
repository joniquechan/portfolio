import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      title: "ML and Fullstack Development Intern",
      company: "Innovision LLC",
      period: "May 2025 - Present",
      description:
        "Designed and implemented full-stack applications in Next.js, FastAPI, and PostgreSQL, applying software engineering principles in a production setting. Contributed to database optimization and API performance improvements with a focus on user experience improvements.",
      technologies: ["Next.js", "Git", "Python", "PostgreSQL"],
      icon: "💻",
    },
    {
      id: 2,
      title: "Production Services Group",
      company: "Cedarville University",
      period: "June 2024 - Present",
      description:
        "Responsible for live-streaming campus chapel events, ensuring seamless audio-visual production and real-time troubleshooting for an audience of over 4,000 students. Helped with technical setup and managed equipment to meet broadcast standards.",
      technologies: [
        "Direct Streaming",
        "Audio-Visual Production",
        "Troubleshooting",
      ],
      icon: "🎥",
    },
    {
      id: 3,
      title: "Teaching Assistant",
      company: "Cedarville University",
      period: "January 2024 - Present",
      description:
        "Facilitated learning for a comprehensive cybersecurity course, catering to a diverse group of 90 students. Conducted thorough assessments and provided timely feedback, contributing to the overall improvement of student performance.",
      technologies: ["C++", "Linux", "Networks", "JavaScript"],
      icon: "👨‍🏫",
    },
    {
      id: 4,
      title: "Graphic Design Intern",
      company: "Chiang Rai Kitchen",
      period: "September 2021 - November 2021",
      description:
        "Utilized design software to create innovative designs for projects such as social media campaigns and print materials while meeting project deadlines. Collaborated and communicated with team members to improve designs that better convey key messages and supported marketing objectives. ",
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"],
      icon: "🎨",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      originY: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="timeline"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="timeline-section"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      <div className="timeline-container">
        <motion.div
          className="timeline-line"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <motion.div
          className="timeline-items"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">{experience.icon}</div>
                <div className="timeline-header">
                  <h3>{experience.title}</h3>
                  <h4>{experience.company}</h4>
                  <span className="timeline-period">{experience.period}</span>
                </div>
                <p>{experience.description}</p>
                <div className="timeline-tech">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-tag"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(100, 255, 218, 0.3)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Timeline;
