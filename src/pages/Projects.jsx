import React, { useEffect, useState } from "react";

// Project-specific metadata for manual enhancement
const projectMetadata = {
  "text-summarization-pretrained-models": {
    image: "/project1.png",
    title: "Text Summarization for Legal Proceedings",
    description:
      "Evaluated pre-trained models (BART, BERT, T5, GPT-2) for abstractive summarization of historical legal proceedings (Old Bailey dataset). Preprocessed data, executed model evaluation using ROUGE metrics, and analyzed results—highlighting precision and order-preservation tradeoffs.",
  },
    "aishwarya-portfolio": {
    image: "/project2.png",
    title: "Aishwarya Portfolio",
    description:
      "My personal portfolio website showcasing data analysis projects, skills, and professional experience. Built with React and Tailwind CSS.",
  },
    "vicz-website": {
    image: "/project3.png",
    title: "VICZ Website",
    description:
      "Developed a responsive and professional business website for VICZ Import & Export Ltd using React.js and Create React App. The site features key company information, services, product listings, and a contact form. Designed to run offline on a single laptop as per client requirements, ensuring easy local deployment and maintenance without the need for hosting. The project emphasizes clean, reusable components and a mobile-friendly layout for optimal user experience across devices.",
  },
  
  // You can add more entries here for other projects, e.g.:
  // "my-portfolio-site": { image: "/portfolio.png", title: "Personal Portfolio", description: "Developed a responsive, modern portfolio website using React and Tailwind CSS." },
};

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Aishwaryajohn97/repos")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load projects. Try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-6 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
          My Projects
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
          Below is a curated selection of my GitHub repositories, showcasing my work across full‑stack development, web apps,
          and technical experimentation. Visit my GitHub profile for all code and contributions.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="https://github.com/Aishwaryajohn97?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#001f3f] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105 font-semibold text-xl"
          >
            View Full GitHub Profile
          </a>
        </div>

        {loading && <p className="text-center text-gray-600 text-lg">Loading projects...</p>}
        {error && <p className="text-center text-red-600 text-lg">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => {
              const meta = projectMetadata[repo.name];
              const title = meta?.title || repo.name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
              const description = meta?.description || repo.description || "No detailed description available.";
              return (
                <div key={repo.id} className="bg-white rounded-xl shadow p-6 flex flex-col border border-gray-200">
                  {meta?.image ? (
                    <img
                      src={meta.image}
                      alt={title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/600x400/E0E0E0/333333?text=Project+Image";
                      }}
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-md mb-4">
                      <span className="text-gray-600">No Image</span>
                    </div>
                  )}
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
                  <p className="text-sm text-gray-600 text-justify mb-4 flex-grow">{description}</p>
                  <div className="text-xs text-gray-500 mt-auto flex justify-between items-center">
                    {repo.language && (
                      <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        🛠 {repo.language}
                      </span>
                    )}
                    <span>🕒 {new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm font-semibold mt-4 text-center"
                  >
                    View on GitHub →
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
