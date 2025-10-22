<<<<<<< HEAD
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <motion.a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              .skills()
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              .projects()
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#timeline"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("timeline");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              .experience()
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              .contact()
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#about-me"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about-me");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              .about-me()
            </motion.a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
=======
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <motion.a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("skills");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              .skills()
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              .projects()
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#timeline"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("timeline");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              .experience()
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              .contact()
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#about-me"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about-me");
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              .about-me()
            </motion.a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
>>>>>>> 3f5aae4d805f7b64fe5ec62314d192f7b17af6e4
