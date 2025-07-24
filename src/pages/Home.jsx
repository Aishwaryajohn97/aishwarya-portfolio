import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/profile.jpeg')", // Replace with your image path
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Centered Content (Optional — Add Heading if needed) */}
        {/* <h1 className="relative text-white text-4xl font-bold z-10">Welcome</h1> */}
      </section>

      {/* Buttons Section */}
      <section className="py-8 bg-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Resume Button */}
          <a
            href="/aishwarya_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition duration-300 transform hover:scale-105 font-semibold"
          >
            View Resume
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/Aishwaryajohn97?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-900 text-blue-900 px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition duration-300 transform hover:scale-105 font-semibold"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
