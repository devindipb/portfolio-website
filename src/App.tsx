import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Certificates from "./sections/Certificates/Certificates";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Stats from "./sections/Stats/Stats";
import SocialSidebar from "./SocialSidebar";
import AboutSkills from "./sections/AboutSkills/AboutSkills";
import ResearchPublications from "./sections/ResearchPublications/ResearchPublications";



function App() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <Stats />
      <AboutSkills />
      <Projects />
      <ResearchPublications />
      <Education />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;