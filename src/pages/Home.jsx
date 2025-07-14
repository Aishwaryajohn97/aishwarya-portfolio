import React from "react";

const Home = () => {
  return (
    <>
      {/* The main section acts as the hero container, now without the buttons */}
      {/* 'relative' allows for absolute positioning of the overlay. */}
      {/* 'h-[60vh]' sets the height to 60% of the viewport height. */}
      {/* 'bg-contain' ensures the entire image is visible, scaling it down to fit within the container. */}
      {/* 'bg-no-repeat' prevents the image from repeating if there's extra space. */}
      {/* 'bg-center' centers the image within the container. */}
      <section
        className="relative h-[60vh] bg-contain bg-no-repeat bg-center flex items-center justify-center p-4 md:p-8" // Changed bg-cover to bg-contain and added bg-no-repeat
        style={{ backgroundImage: "url('/profile.jpg')" }}
      >
  

        {/* No content (text) inside the hero section as per request */}
      </section>

      {/* Buttons section - now placed below the hero image */}
      {/* 'py-8' adds vertical padding. 'bg-gray-100' gives it a light background. */}
      {/* 'flex justify-center' centers the buttons horizontally. */}
      <section className="py-8 bg-gray-100">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          {/* View Resume Button */}
          <a
            href="/aishwarya_resume.pdf" // Ensure this path is correct for your resume file
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray transition duration-300 ease-in-out transform hover:scale-105 font-semibold text-center"
          >
            View Resume
          </a>
          {/* GitHub Button */}
          <a
            href="https://github.com/Aishwaryajohn97?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray hover:text-black transition duration-300 ease-in-out transform hover:scale-105 font-semibold text-center"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
