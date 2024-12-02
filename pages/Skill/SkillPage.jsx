import React from 'react';
import styled from 'styled-components';
import Header from "../../components/Header";
import { skills } from '../../utils/SkillsUtils';
import { useLanguage } from "../../contexts/LanguageContext";

export default function SkillPage() {
  const { language } = useLanguage();
  const { title, categories } = skills[language];

  return (
    <SkillContainer>
      <Header />
      <HeroSection>
        <HeroTitle>{title}</HeroTitle>
        <SkillsGrid>
          {categories.map((skill, index) => (
            <SkillCategory key={index}>
              <CategoryHeader>
                <CategoryTitle>{skill.category}</CategoryTitle>
              </CategoryHeader>
              <SkillItems>
                {skill.items.map((item, idx) => (
                  <SkillItem key={idx}>
                    {item.icon}
                    <SkillName>{item.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillItems>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </HeroSection>
    </SkillContainer>
  );
}

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 50px;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Sempre 2 colunas */
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

const SkillCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #1b1b1b;
  border: 1px solid #9c9c9c;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const SkillItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: white;
`;

const SkillName = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
`;