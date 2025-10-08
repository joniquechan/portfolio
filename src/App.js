import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;
