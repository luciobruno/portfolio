import React from 'react';
import styled from 'styled-components';
import Header from "../../components/Header";
import { useLanguage } from "../../contexts/LanguageContext";
import { experiences, title } from "../../utils/ExperiencesUtils";

export default function ExperiencesPage() {
  const { language } = useLanguage();
  const data = experiences[language];
  const mainTitle = title[language];

  return (
    <ExperienceContainer>
      <Header />
      <Title>{mainTitle.myTitle}</Title>
      {data.map((exp, index) => (
        <ExperienceCard key={index}>
          <HeaderExperience>
            <PositionTitle>{exp.position}</PositionTitle>
            <Company>{exp.company}</Company>
            <Duration>{exp.duration}</Duration>
            <Location>{exp.location}</Location>
          </HeaderExperience>
          <Description>
            {exp.description.map((desc, idx) => (
              <DescriptionItem key={idx}>
                <Point />
                <DescriptionText>{desc}</DescriptionText>
              </DescriptionItem>
            ))}
          </Description>
        </ExperienceCard>
      ))}
    </ExperienceContainer>
  );
}

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 50px;
  text-align: center;
  margin-bottom: 40px;
`;

const ExperienceCard = styled.div`
  width: 800px;
  max-width: 90%;
  margin-bottom: 40px;
  border: 1px solid #9c9c9c;
  border-radius: 10px;
  padding-bottom: 20px;
  background-color: #1b1b1b;
`;

const HeaderExperience = styled.div`
  margin-bottom: 20px;
`;

const PositionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin: 20px;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  margin: 0px 0px 15px 20px;
`;

const Duration = styled.p`
  font-size: 0.9rem;
  color: #9ccc65;
  margin: 0px 0px 2px 20px;
`;

const Location = styled.p`
  font-size: 0.9rem;
  color: #9ccc65;
  margin: 0px 0px 0px 20px;
`;

const Description = styled.div`
  margin: 0px 0px 0px 20px;
`;

const DescriptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Point = styled.span`
  width: 8px;
  height: 8px;
  background-color: #9c9c9c; /* Cor do ponto */
  border-radius: 50%;
  margin-right: 10px;
`;

const DescriptionText = styled.p`
  color: #9c9c9c;
  font-size: 1.2rem;
  margin: 0;
`;
