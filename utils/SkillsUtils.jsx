import { FaPython, FaDatabase, FaReact, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiRedis, SiApacheairflow, SiGooglebigquery, SiPowerbi, SiJavascript, SiTypescript } from "react-icons/si";

export const skills = {
    en: {
      title: "My Skills",
      categories: [
        {
          category: 'Languages',
          icon: <FaPython color="#3572A5" />,
          items: [
            { name: 'Python', icon: <FaPython color="#3572A5" /> },
            { name: 'SQL', icon: <SiPostgresql color="#336791" /> },
            { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#007ACC" /> },
          ],
        },
        {
          category: 'Data Engineering Tools',
          icon: <SiApacheairflow color="#017CEE" />,
          items: [
            { name: 'Airflow', icon: <SiApacheairflow color="#017CEE" /> },
            { name: 'BigQuery Google', icon: <SiGooglebigquery color="#017CEE" /> },
            { name: 'Power BI', icon: <SiPowerbi color="#F2C811" /> },
          ],
        },
        {
          category: 'Web Development',
          icon: <FaReact color="#61DAFB" />,
          items: [
            { name: 'React', icon: <FaReact color="#61DAFB" /> },
            { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
          ],
        },
        {
          category: 'Databases',
          icon: <FaDatabase color="#636363" />,
          items: [
            { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
            { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
            { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
          ],
        },
      ],
    },
    pt: {
      title: "Minhas Habilidades",
      categories: [
        {
          category: 'Linguagens',
          icon: <FaPython color="#3572A5" />,
          items: [
            { name: 'Python', icon: <FaPython color="#3572A5" /> },
            { name: 'SQL', icon: <SiPostgresql color="#336791" /> },
            { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#007ACC" /> },
          ],
        },
        {
          category: 'Ferramentas de Engenharia de Dados',
          icon: <SiApacheairflow color="#017CEE" />,
          items: [
            { name: 'Airflow', icon: <SiApacheairflow color="#017CEE" /> },
            { name: 'BigQuery Google', icon: <SiGooglebigquery color="#017CEE" /> },
            { name: 'Power BI', icon: <SiPowerbi color="#F2C811" /> },
          ],
        },
        {
          category: 'Desenvolvimento Web',
          icon: <FaReact color="#61DAFB" />,
          items: [
            { name: 'React', icon: <FaReact color="#61DAFB" /> },
            { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
          ],
        },
        {
          category: 'Bancos de Dados',
          icon: <FaDatabase color="#636363" />,
          items: [
            { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
            { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
            { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
          ],
        },
      ],
    },
  };