import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "MemoryMaths",
      description: "Puzzle game for kids suffering from Dementia and Dyslexia with respect to learning Maths subject.",
      tech: "Dart/Flutter",
      link: "https://github.com/nick2601/MemoryMaths",
      isOriginal: true
    },
    {
      title: "Guess the Name",
      description: "Android Puzzle Game built with Kotlin",
      tech: "Kotlin/Android",
      link: "https://github.com/nick2601/Guess-the-name",
      isOriginal: true
    },
    {
      title: "GuessTheCelebrity",
      description: "A Java-based Android game for guessing celebrities",
      tech: "Java/Android",
      link: "https://github.com/nick2601/GuessTheCelebrity",
      isOriginal: true
    }
  ];

  return (
    <div id="projects" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                {project.isOriginal && (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Original</span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="bg-gray-100 rounded px-2 py-1">{project.tech}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
