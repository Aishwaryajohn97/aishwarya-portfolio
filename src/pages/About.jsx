import React from "react";

const About = () => {
  return (
    <section id="about" className="py-6 px-10 max-w-4xl mx-auto bg-gray-100"> {/* Added bg-gray-100 for consistency */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">About Me</h2>
      
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Hello! I'm <span className="font-semibold text-black">Aishwarya John Pole</span>, an aspiring Data Analyst with a Master’s in Data Science and Analytics from the University of Hertfordshire. My diverse professional background blends technology, digital solutions, and operations, giving me a unique perspective on data-driven problem-solving.
      </p>
      
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        My journey includes building and managing <span className="font-semibold">Pole Digital Solutions</span>, where I designed websites, POS systems, and branding strategies. I also contributed to cutting-edge autonomous vehicle projects at <span className="font-semibold">Wipro (Google/Waymo)</span>, specializing in 3D LiDAR data annotation and quality assurance. Furthermore, my experience at <span className="font-semibold">Savills</span> involved managing complex operations and stakeholder communications across numerous sites.
      </p>
      
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        I bring hands-on technical proficiency in <span className="font-semibold">Python</span> (Pandas, NumPy, Matplotlib, Seaborn), <span className="font-semibold">SQL</span>, <span className="font-semibold">Tableau</span>, and <span className="font-semibold">Excel</span> for robust data manipulation, analysis, and visualization. My strengths lie in transforming complex data into actionable insights that support strategic decision-making and drive business growth.
      </p>
      
      <p className="text-gray-700 text-lg leading-relaxed">
        I am passionate about leveraging my analytical foundation and real-world problem-solving experience to deliver meaningful outcomes. I'm actively seeking opportunities in data analysis, reporting, and visualization where I can continue to grow and specialize in the field. Let’s connect!
      </p>
    </section>
  );
};

export default About;
