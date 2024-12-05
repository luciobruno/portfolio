import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { homeContent } from "../../utils/HomeUtils";
import { useLanguage } from "../../contexts/LanguageContext";
import PerfilImage from '../../public/Perfil.jpeg';

export default function HomePage() {
  const { language } = useLanguage();
  const {
    welcomeTitle,
    welcomeSubtitle,
    historyTitle,
    historySubtitle,
    careerObjectiveTitle,
    careerObjective,
    educationTitle,
    education,
  } = homeContent[language];

  return (
    <HomeContainer>
      <Header />
      <HeroSection>
        <HeroTitle>{welcomeTitle}</HeroTitle>
        <Image src={PerfilImage}></Image>
        <Section>
          <Text>{welcomeSubtitle}</Text>
        </Section>
        <CareerSection>
          <SectionTitle>{historyTitle}</SectionTitle>
          <Text>{historySubtitle}</Text>
        </CareerSection>
        <CareerSection>
          <SectionTitle>{careerObjectiveTitle}</SectionTitle>
          <Text>{careerObjective}</Text>
        </CareerSection>
        <EducationSection>
          <SectionTitle>{educationTitle}</SectionTitle>
          <EducationCard>
            <Institution>{education.institution}</Institution>
            <Details>{education.degree}</Details>
            <Details>{education.duration}</Details>
          </EducationCard>
        </EducationSection>
      </HeroSection>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  max-width: 900px;
`;

const HeroTitle = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #9c9c9c;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const CareerSection = styled.div`
  margin-bottom: 40px;
`;

const EducationSection = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

const EducationCard = styled.div`
  text-align: left;
  padding: 20px;
  gap: 20px;
  border-top: 1px solid #9c9c9c;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Institution = styled.h4`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 25px;
`;

const Details = styled.p`
  font-size: 1.2rem;
  color: #9c9c9c;
  margin-bottom: 10px; /* Espaçamento maior entre os detalhes */
`;

const Image = styled.img`
  margin-top: 20px;
  width: 250px;
  height: 250px;
  border-radius: 250px;
  margin-bottom: 20px;
`