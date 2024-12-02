import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { useLanguage } from "../../contexts/LanguageContext";
import { projectContent, projectContentTitle } from "../../utils/ProjectUtils";

export default function ProjectPage() {
  const { language } = useLanguage();

  const projects = projectContent[language].projects;
  const titleProjects = projectContentTitle[language].title;

  return (
    <ProjectContainer>
      <Header />
      <HeroTitle>{titleProjects}</HeroTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectSection>
              <Section>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Text>{project.intro}</Text>
              </Section>
              <Section>
                <SectionTitle>
                  {language === "pt" ? "Sobre este Projeto" : "About this Project"}
                </SectionTitle>
                <Text>{project.projectDescription}</Text>
              </Section>
              <Section>
                <SectionTitle>{language === "pt" ? "Rotas" : "Routes"}</SectionTitle>
                <RoutesList>
                  {project.routes.map((route, idx) => (
                    <RouteItem key={idx}>
                      <span>{route.path}</span>: {route.description}
                    </RouteItem>
                  ))}
                </RoutesList>
              </Section>
              <Section>
                <SectionTitle>
                  {language === "pt" ? "Tecnologias" : "Technologies"}
                </SectionTitle>
                <Technologies>
                  {project.technologies.map((tech, idx) => (
                    <TechBadge key={idx}>{tech}</TechBadge>
                  ))}
                </Technologies>
              </Section>
            </ProjectSection>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  width: 80%;
`;

const ProjectCard = styled.div`
  background-color: #1b1b1b;
  border: 1px solid #9c9c9c;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectSection = styled.div`
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h1`
  font-size: 2.0rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #9c9c9c;
  line-height: 1.6;
`;

const RoutesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RouteItem = styled.li`
  font-size: 1rem;
  color: #9c9c9c;
  margin-bottom: 10px;

  span {
    font-weight: bold;
    color: white;
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechBadge = styled.span`
  background: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
`;