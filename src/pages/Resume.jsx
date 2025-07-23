import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-12 px-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">My Resume</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          You can view or download my latest resume below. It provides a comprehensive overview of my education, skills, projects, and professional experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Button to View Resume (opens in new tab) */}
          <a
            href="/aishwarya_resume.pdf" // Path to your resume PDF file
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#001f3f] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray transition duration-300 ease-in-out transform hover:scale-105 font-semibold text-xl" // Changed bg-black to bg-blue-600
          >
            View Resume
          </a>

          {/* Button to Download Resume */}
          <a
            href="/aishwarya_resume.pdf" // Path to your resume PDF file
            download="Aishwarya_John_Pole_Resume.pdf" // Suggested filename for download
            className="border border-blue-900 text-blue-900 px-8 py-4 rounded-lg shadow-lg hover:bg-gray hover:text-black transition duration-300 ease-in-out transform hover:scale-105 font-semibold text-xl" // Changed border-black to border-blue-600 and text-black to text-blue-600
          >
            Download Resume
          </a>
        </div>

        {/* Optional: Embed PDF viewer */}
        {/* Added mx-auto to center this div horizontally */}
        <div className="mt-12 w-full max-w-3xl h-[70vh] bg-white rounded-lg shadow-md overflow-hidden mx-auto">
          <iframe
            src="/aishwarya_resume.pdf#toolbar=0&navpanes=0&scrollbar=0" // #toolbar=0&navpanes=0&scrollbar=0 hides some PDF viewer UI
            title="Aishwarya John Pole Resume"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          >
            <p className="p-4 text-gray-600">
              Your browser does not support PDFs. Please use the "View Resume" or "Download Resume" buttons above.
            </p>
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Resume;
