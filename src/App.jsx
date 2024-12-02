import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";
import HomePage from "../pages/Home/HomePage";
import ExperiencePage from "../pages/Experience/ExperiencePage";
import SkillPage from "../pages/Skill/SkillPage";
import ContactPage from "../pages/Contact/ContactPage";
import ProjectPage from "../pages/Project/ProjectPage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiences" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/skills" element={<SkillPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;