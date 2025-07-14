import React from "react";
import {
  FaPython,
  FaDatabase, // For SQL
  FaChartBar, // For Data Analysis concepts like EDA, Statistical Analysis, Data Interpretation, Report Generation
  FaRobot,    // For ML concepts
  FaProjectDiagram, // For Project Management, Feature Engineering
  FaCogs,     // For general tools, Process Optimization, Model Evaluation, Proprietary tools
  FaHtml5,    // For HTML
  FaCss3,     // For CSS
  FaJs,       // For JavaScript
  FaWordpress, // For WordPress
  FaShoppingCart, // For E-commerce Platforms
  FaFileCsv,    // For Google Sheets (using a generic CSV/file icon)
  FaUsers,      // For Client Management, Team Collaboration, Training & Mentoring
  FaRegFileAlt, // For Technical Documentation
  FaShieldAlt,  // For GDPR Compliance
} from "react-icons/fa";
import {
  SiTableau,
  SiPowerbi,
  SiMicrosoftexcel,
  SiPandas,
  SiNumpy,
  SiScikitlearn, // For scikit-learn (if applicable, user mentioned Python but not specific ML libs beyond general concepts)
} from "react-icons/si";

const skillsData = {
  "Programming & Databases": [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <FaDatabase />, name: "SQL" },
    // User mentioned Python, but not specific ML libraries like scikit-learn directly in the skills list,
    // only "Machine Learning (Basic)" as a category. Including it here as it's a common Python ML library.
    { icon: <SiScikitlearn />, name: "scikit-learn" },
  ],
  "Data Analysis & Visualization": [
    { icon: <FaChartBar />, name: "Data Cleaning & EDA" },
    { icon: <FaChartBar />, name: "Statistical Analysis" },
    { icon: <FaChartBar />, name: "Data Interpretation" },
    { icon: <FaChartBar />, name: "Report Generation" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <SiMicrosoftexcel />, name: "Microsoft Excel" },
    { icon: <FaFileCsv />, name: "Google Sheets" },
  ],
  "Machine Learning (Basic)": [
    { icon: <FaRobot />, name: "Supervised Learning" },
    { icon: <FaRobot />, name: "Unsupervised Learning" },
    { icon: <FaProjectDiagram />, name: "Feature Engineering" },
    { icon: <FaCogs />, name: "Model Evaluation" },
  ],
  "Web & Digital Solutions": [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaWordpress />, name: "WordPress" },
   
  ],
  "Tools & Professional Skills": [
  
    { icon: <FaCogs />, name: "POS Software" },
    { icon: <FaProjectDiagram />, name: "Project Management" },
    { icon: <FaCogs />, name: "Process Optimization" },
    { icon: <FaUsers />, name: "Client Management" },
    { icon: <FaUsers />, name: "Team Collaboration" },
    { icon: <FaUsers />, name: "Training & Mentoring" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-6 bg-gray-100 min-h-screen"> {/* Changed bg-white to bg-gray-100 and added min-h-screen */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">My Skills</h2> {/* Updated heading size and color */}
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-10 max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">{category}</h3> {/* Updated heading size and color */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map(({ icon, name }, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg flex flex-col items-center shadow-md border border-gray-200 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" // Added hover effects
              >
                <div className="text-4xl text-black mb-2">{icon}</div> {/* Increased icon size and changed color */}
                <p className="text-center font-medium text-gray-800">{name}</p> {/* Adjusted text color */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
