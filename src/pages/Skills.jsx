import React from "react";
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaRobot,
  FaProjectDiagram,
  FaCogs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaUsers,
  FaFileCsv,
  FaRegFileAlt,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiVite,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiTableau,
  SiPowerbi,
  SiMicrosoftexcel,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

const skillsData = {
  "Frontend Development": [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript (ES6+)" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiRedux />, name: "Redux Toolkit" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <FaWordpress />, name: "WordPress" },
  ],
  "Backend Development": [
    { icon: <FaNode />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaDatabase />, name: "SQL (MySQL, SQLite)" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaPython />, name: "Python (FastAPI, Flask)" },
  ],
  "DevOps & Tools": [
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaDocker />, name: "Docker (Basics)" },
    { icon: <SiPostman />, name: "Postman (API Testing)" },
    { icon: <FaCogs />, name: "CI/CD (Basics)" },
    { icon: <FaShieldAlt />, name: "Authentication & Security" },
  ],
  "Data Analysis & Visualization": [
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <FaChartBar />, name: "EDA & Data Cleaning" },
    { icon: <SiMicrosoftexcel />, name: "Excel (Advanced)" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <FaFileCsv />, name: "Google Sheets" },
  ],
  "Machine Learning & Research": [
    { icon: <FaRobot />, name: "Supervised & Unsupervised Learning" },
    { icon: <SiScikitlearn />, name: "scikit-learn" },
    { icon: <FaProjectDiagram />, name: "Feature Engineering" },
    { icon: <FaCogs />, name: "Model Evaluation" },
  ],
  "Professional & Business Skills": [
    { icon: <FaProjectDiagram />, name: "Project Management" },
    { icon: <FaUsers />, name: "Client Communication" },
    { icon: <FaUsers />, name: "Team Collaboration" },
    { icon: <FaUsers />, name: "Training & Mentoring" },
    { icon: <FaRegFileAlt />, name: "Documentation" },
    { icon: <FaShieldAlt />, name: "GDPR & Compliance" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
        My Skills
      </h2>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map(({ icon, name }, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg flex flex-col items-center shadow-md border border-gray-200 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <div className="text-4xl text-blue-900 mb-2">{icon}</div>
                <p className="text-center font-medium text-gray-800">{name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
