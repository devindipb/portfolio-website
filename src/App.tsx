import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Certificates from "./sections/Certificates/Certificates";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;