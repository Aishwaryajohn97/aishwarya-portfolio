import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero section using img tag to fully show image */}
      <section className="w-full min-h-[60vh] flex items-center justify-center bg-gray-100">
        <img
          src="/profile.jpeg" // Replace with your actual path
          alt="Aishwarya Hero"
          className="w-full h-full object-contain md:object-cover"
        />
      </section>

      {/* Buttons section below image */}
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
