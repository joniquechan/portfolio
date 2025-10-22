<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Academic Planning Environment",
      description:
        "Designed and implemented a web application for an academic planning environment using .NET Core MVC. Integrated MySQL using XAMPP for local simulation and deployed the project on a VM accessible via Cedarville University's network.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "React", "C#", "MySQL"],
    },
    {
      title: "Device Driver Program",
      description:
        "Developed the module for a custom Linux device driver capable of receiving user input to render graphical output on the screen with support for varying colors and line widths. Demonstrated strong proficiency in Linux kernel programming and low-level hardware communication for real-time graphical updates.",
      techStack: ["SSH", "Linux OS", "C++"],
    },
    {
      title: "Euchre Bot",
      description:
        "Used the rlcard library to build the environment for the Euchre card game and train an agent with DQN to play.",
      techStack: ["Python", "Deep Learning"],
    },
    {
      title: "Multiplayer Pong",
      description:
        "Developed a client/server Pong game enabling real-time multiplayer functionality. Designed and implemented communication using UDP sockets to efficiently exchange game state information, including paddle positions and ball trajectories",
      techStack: ["Python", "UDP"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            variants={projectVariants}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(100, 255, 218, 0.1)",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(100, 255, 218, 0.3)",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
=======
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Academic Planning Environment",
      description:
        "Designed and implemented a web application for an academic planning environment using .NET Core MVC. Integrated MySQL using XAMPP for local simulation and deployed the project on a VM accessible via Cedarville University's network.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "React", "C#", "MySQL"],
    },
    {
      title: "Device Driver Program",
      description:
        "Developed the module for a custom Linux device driver capable of receiving user input to render graphical output on the screen with support for varying colors and line widths. Demonstrated strong proficiency in Linux kernel programming and low-level hardware communication for real-time graphical updates.",
      techStack: ["SSH", "Linux OS", "C++"],
    },
    {
      title: "Euchre Bot",
      description:
        "Used the rlcard library to build the environment for the Euchre card game and train an agent with DQN to play.",
      techStack: ["Python", "Deep Learning"],
    },
    {
      title: "Multiplayer Pong",
      description:
        "Developed a client/server Pong game enabling real-time multiplayer functionality. Designed and implemented communication using UDP sockets to efficiently exchange game state information, including paddle positions and ball trajectories",
      techStack: ["Python", "UDP"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            variants={projectVariants}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(100, 255, 218, 0.1)",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(100, 255, 218, 0.3)",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
>>>>>>> 3f5aae4d805f7b64fe5ec62314d192f7b17af6e4
