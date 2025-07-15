import { SectionHome } from "./components/SectionHome";
import { SectionJourney } from "./components/SectionJourney";
import { SectionCarousel } from "./components/SectionCarousel";
import { SectionSkills } from "./components/SectionSkills";
import { ThemeToggle } from "./components/ThemeToggle";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { SectionProjects } from "./components/SectionProjects";

function App() {
  return (
    <>
      <ThemeToggle />
      <NavBar />
      <SectionHome />
      <h2 id="journey" className="topic">
        Journey
      </h2>
      <SectionJourney />
      <div className="spacer"></div>
      <h2 id="skills" className="topic">
        Skills
      </h2>
      <SectionCarousel />
      <SectionSkills />
      <div className="spacer"></div>
      <h2 id="projects" className="topic">
        Projects
      </h2>
      <SectionProjects />
      <div className="mb-14"></div>
      <Footer />
    </>
  );
}

export default App;
