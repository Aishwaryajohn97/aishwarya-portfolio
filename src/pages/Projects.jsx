import React, { useEffect, useState } from "react";

// Define project metadata including image paths, titles, and detailed descriptions
const projectMetadata = {
  // Adding your Text Summarization project
  "text-summarization-pretrained-models": {
    image: "/project1.png", // Placeholder image, replace with an actual image if you have one
    title: "Text Summarization for Legal Proceedings",
    description: "Master's project evaluating pre-trained models (BART, BERT, T5, GPT-2) for abstractive text summarization of historical legal proceedings from the Old Bailey dataset. Involved data preprocessing, model application, and evaluation using ROUGE-1, ROUGE-2, and ROUGE-L metrics. Achieved high precision with BERT and GPT-2, identifying strengths in word usage but limitations in preserving word order.",
  },
};

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all public repositories from your GitHub profile
    fetch("https://api.github.com/users/Aishwaryajohn97/repos")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        // Filter repositories to only include those with defined metadata
        const filteredRepos = data.filter(repo => projectMetadata.hasOwnProperty(repo.name));
        // Sort the filtered repositories based on their appearance in projectMetadata
        // This ensures the order is as defined by the user
        const orderedRepos = Object.keys(projectMetadata)
          .map(key => filteredRepos.find(repo => repo.name === key))
          .filter(Boolean); // Remove any undefined entries if a repo from metadata isn't found on GitHub

        setRepos(orderedRepos);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch repositories:", err);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-6 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">My Projects</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
          Here you'll find a selection of my data analysis projects, complete with detailed descriptions and visual representations. For a comprehensive view of my code and contributions, please visit my GitHub profile.
        </p>

        {/* GitHub Profile Link Button */}
        <div className="flex justify-center mb-12">
          <a
            href="https://github.com/Aishwaryajohn97?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 font-semibold text-xl text-center"
          >
            Visit My GitHub Profile
          </a>
        </div>

        {loading && (
          <p className="text-center text-gray-600 text-lg">Loading projects...</p>
        )}

        {error && (
          <p className="text-center text-red-600 text-lg">{error}</p>
        )}

        {!loading && !error && repos.length === 0 && (
          <p className="text-center text-gray-600 text-lg">No featured projects found or loaded.</p>
        )}

        {/* Dynamic Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading && !error && repos.length > 0 && repos.map((repo) => {
            const meta = projectMetadata[repo.name]; // Get metadata for the current repo

            return (
              <div
                key={repo.id}
                className="bg-white rounded-xl shadow p-6 flex flex-col border border-gray-200"
              >
                {meta.image ? (
                  <img
                    src={meta.image}
                    alt={meta.title || repo.name}
                    className="w-full h-30 object-cover rounded-md mb-4"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E0E0/333333?text=Project+Image"}} // Fallback image
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-md mb-4">
                    <span className="text-gray-600">No Image</span>
                  </div>
                )}

                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {meta.title || repo.name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
                </h4>

                <p className="text-sm text-gray-600 text-justify mb-4 flex-grow">
                  {meta.description || repo.description || "No detailed description available for this repository."}
                </p>

                <div className="text-xs text-gray-500 mt-auto flex justify-between items-center">
                  {repo.language && (
                    <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      🛠 {repo.language}
                    </span>
                  )}
                  <span>🕒 Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm font-semibold mt-4 block text-center"
                >
                  View on GitHub →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
