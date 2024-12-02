import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { contactInfo } from "../../utils/ContactUtils";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useLanguage } from "../../contexts/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage(); // Obtém o idioma selecionado
  const { title, subtitle, contacts } = contactInfo[language]; // Pega os textos com base no idioma

  const icons = {
    FaLinkedin: <FaLinkedin color="#0A66C2" size={24} />,
    FaGithub: <FaGithub color="#000000" size={24} />,
    HiOutlineMail: <HiOutlineMail color="#EA4335" size={24} />,
  };

  return (
    <ContactContainer>
      <Header />
      <HeroSection>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <ContactList>
          {contacts.map((contact, index) => (
            <ContactItem key={index}>
              {icons[contact.icon]}
              <ContactLink href={contact.url} target="_blank" rel="noopener noreferrer">
                {contact.label}: {contact.text}
              </ContactLink>
            </ContactItem>
          ))}
        </ContactList>
      </HeroSection>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
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
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #9c9c9c;
  margin-bottom: 30px;
`;

const ContactList = styled.ul`
  background-color: #1b1b1b;
  border: 1px solid #9c9c9c;
  border-radius: 10px;
  list-style: none;
  padding: 20px;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.1rem;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;