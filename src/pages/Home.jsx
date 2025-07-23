import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Image Section as Background */}
      <section
        className="relative h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/profile.jpeg')" }}
      >
        {/* Empty for background-only hero section */}
      </section>

      {/* Buttons Section Below Hero */}
      <section className="py-10 bg-white">
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Resume Button */}
          <a
            href="/aishwarya_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#001f3f] text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition transform hover:scale-105 font-semibold"
          >
            View Resume
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/Aishwaryajohn97?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-900 text-blue-900 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition transform hover:scale-105 font-semibold"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
