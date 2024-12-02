import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (lang) => {
    if (lang !== language) toggleLanguage();
    setShowDropdown(false); // Fecha o dropdown após a seleção
  };

  return (
    <HeaderContainer>
      <List>
        <StyledLink to="/">{language === "en" ? "Home" : "Início"}</StyledLink>
        <StyledLink to="/experiences">{language === "en" ? "Experiences" : "Experiências"}</StyledLink>
        <StyledLink to="/projects">{language === "en" ? "Projects" : "Projetos"}</StyledLink>
        <StyledLink to="/skills">{language === "en" ? "Skills" : "Habilidades"}</StyledLink>
        <StyledLink to="/contact">{language === "en" ? "Contact" : "Contato"}</StyledLink>
      </List>
      <ContactAndLanguage>
        <ContactLinks>
          <ContactLink
            href="https://github.com/luciobruno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/luciobruno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </ContactLink>
          <ContactLink href="mailto:luciobruno20@hotmail.com">
            <FaEnvelope />
          </ContactLink>
        </ContactLinks>
        <LanguageDropdown>
          <CurrentLanguage onClick={() => setShowDropdown(!showDropdown)}>
            {language === "en" ? "EN" : "PT"} ▼
          </CurrentLanguage>
          {showDropdown && (
            <DropdownMenu>
              <DropdownItem onClick={() => handleLanguageChange("en")}>
                English
              </DropdownItem>
              <DropdownItem onClick={() => handleLanguageChange("pt")}>
                Português
              </DropdownItem>
            </DropdownMenu>
          )}
        </LanguageDropdown>
      </ContactAndLanguage>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  background: #1b1b1b;
  color: white;
  padding: 10px 40px;
  border-radius: 0 0 15px 15px;
`;


const List = styled.div`
  display: flex;
  justify-content: center;
  flex: 1; /* Garante que ocupa o espaço central */
  gap: 100px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: #9c9c9c;
  font-weight: bold;
  &:hover {
    color: #ccc;
  }
`;

const ContactAndLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ContactLink = styled.a`
  color: white;
  font-size: 1.5rem;

  &:hover {
    color: #007bff;
  }
`;

const LanguageDropdown = styled.div`
  position: relative;
  display: flex;
  margin-right: 20px; /* Espaço extra da borda direita */
`;

const CurrentLanguage = styled.div`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: white;
    color: #333;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #333;

  &:hover {
    background: #007bff;
    color: white;
  }
`;
