import React from "react";

const About = () => {
  return (
    <section id="about" className="py-10 px-6 max-w-4xl mx-auto bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">About Me</h2>

      {/* Introduction */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        I’m <span className="font-semibold text-black">Aishwarya John Pole</span>, a dedicated and self-taught <span className="font-semibold">Full-Stack Web Developer</span> with a strong passion for building modern, scalable, and user-friendly web applications. I specialize in delivering real-world solutions for businesses, combining design thinking with clean code and full ownership of the development lifecycle.
      </p>

      {/* Vision & Mission */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        My mission is to bridge the digital gap for startups and small businesses by crafting intuitive and efficient applications. I believe in using technology not just to build, but to solve problems that matter. My vision is to continue evolving as a full-stack engineer who brings business-focused, production-ready systems to life.
      </p>

      {/* Tech Stack & Skills */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        I work with a full suite of technologies including <span className="font-semibold">React, Node.js, Express.js, PostgreSQL, SQLite, Firebase, and WordPress</span>. On the frontend, I use <span className="font-semibold">HTML, CSS, Tailwind CSS, JavaScript, and Figma</span> to build clean, responsive interfaces. I also use <span className="font-semibold">Git, GitHub, and VS Code</span> as part of my daily workflow.
      </p>

      {/* Practical Experience */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        I've developed an offline POS and inventory tracking system using SQLite for a fisheries business in Ghana, ensuring full functionality without internet connectivity. I also designed and built a complete business website for <span className="font-semibold">Vijayalaxmi Import & Export Ltd</span>, along with personal portfolio websites for multiple clients.
      </p>

      {/* Career Goal */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        While I may not yet have experience in a traditional tech company, my projects reflect real-world challenges, clients, and outcomes. I'm now seeking a role where I can contribute to a professional engineering team, expand my knowledge, and apply my hands-on experience to larger codebases and collaborative workflows.
      </p>

      {/* Final Note */}
      <p className="text-gray-700 text-lg leading-relaxed">
        If you're looking for a motivated full-stack developer who takes initiative, delivers real value, and learns fast — I'm ready to contribute. Let’s build something impactful together.
      </p>
    </section>
  );
};

export default About;
