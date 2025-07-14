Aishwarya John Pole - Data Analyst Portfolio
Project Overview
This repository hosts the source code for my personal portfolio website, designed to showcase my expertise as a Data Analyst. It features a collection of my data analysis projects, a detailed overview of my technical and professional skills, and my comprehensive resume. The website serves as a central hub for recruiters and collaborators to explore my work and learn more about my capabilities.

Features
Home Page: A welcoming hero section with a professional image and key action buttons (View Resume, GitHub Profile).

About Me: A detailed section outlining my professional journey, background, and aspirations as a Data Analyst.

Projects: Dynamically displays my public GitHub repositories, providing titles, descriptions, and links to each project.

Skills: Categorized display of my technical and professional skills with relevant icons.

Resume: Provides options to view or download my resume, with an embedded PDF viewer for convenience.

Responsive Design: Optimized for seamless viewing across various devices (desktop, tablet, mobile) using Tailwind CSS.

Clean UI: A modern and professional user interface with a consistent color scheme.

Technologies Used
Frontend Framework: React.js

Styling: Tailwind CSS

Routing: React Router DOM

Icon Library: React Icons (e.g., react-icons/fa, react-icons/si)

API Integration: GitHub API (for fetching project repositories)

Package Manager: npm

Getting Started
Prerequisites
Before running this project locally, ensure you have the following installed:

Node.js (LTS version recommended)

npm (comes with Node.js)

Git

Installation
Clone the repository:

git clone https://github.com/Aishwaryajohn97/aishwarya-portfolio.git

Navigate into the project directory:

cd aishwarya-portfolio

Install dependencies:

npm install

Running the Project Locally
Start the development server:

npm start

Open your browser and navigate to http://localhost:5173 (or the port indicated in your terminal).

Project Structure
aishwarya-portfolio/
├── public/
│   ├── aishwarya_resume.pdf  # Your resume PDF file
│   ├── profile.jpg           # Your hero image
│   ├── project1.png          # Project image for Airbnb
│   ├── project2.png          # Project image for Hospital Optimization
│   ├── ...                   # Other project images (project3.png to project8.png)
│   └── index.html            # Main HTML file
├── src/
│   ├── App.js                # Main application component and routing setup
│   ├── index.css             # Global CSS (e.g., for body background)
│   ├── index.js              # React entry point
│   ├── components/
│   │   └── Navbar.jsx        # Navigation bar component
│   ├── pages/
│   │   ├── Home.jsx          # Home page component
│   │   ├── About.jsx         # About Me page component
│   │   ├── Projects.jsx      # Projects page component
│   │   ├── Skills.jsx        # Skills page component
│   │   └── Resume.jsx        # Resume page component
│   └── tailwind.config.js    # Tailwind CSS configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # This file

Customization
Content: Update the text content in Home.jsx, About.jsx, Projects.jsx, Skills.jsx, and Resume.jsx to reflect your latest information.

Images: Ensure profile.jpg and your project images (project1.png, etc.) are placed in the public/ folder. Update paths in Home.jsx and Projects.jsx accordingly.

Resume PDF: Place your updated resume PDF as aishwarya_resume.pdf in the public/ folder.

GitHub Username: If your GitHub username changes, update it in Projects.jsx (https://api.github.com/users/Aishwaryajohn97/repos).

Colors/Theme: Modify tailwind.config.js or directly edit Tailwind classes in components to adjust the color scheme.

Project Metadata: In Projects.jsx, update the projectMetadata object with your specific project details, images, titles, and descriptions.

Deployment
This project can be deployed to various static site hosting services like Netlify, Vercel, GitHub Pages, or Firebase Hosting. Consult their documentation for specific deployment steps.

Contact
Aishwarya John Pole

Email: aishwaryajohnpolemadhu@gmail.com

LinkedIn: https://www.linkedin.com/in/aishwarya-john-pole-b23452236/

GitHub: https://github.com/Aishwaryajohn97