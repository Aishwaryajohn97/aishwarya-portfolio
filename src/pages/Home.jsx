import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[100vh] sm:min-h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/profile.jpeg')", // Replace with correct path
        }}
      >
        {/* Optional overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>

        {/* Optional text (can be removed or styled later) */}
        {/* <div className="relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Aishwarya John Pole</h1>
          <p className="text-lg md:text-xl mt-2">Full-Stack Developer</p>
        </div> */}
      </section>

      {/* Buttons Section */}
      <section className="py-8 bg-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/aishwarya_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition duration-300 transform hover:scale-105 font-semibold"
          >
            View Resume
          </a>

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
