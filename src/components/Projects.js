import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards can be added here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600">Description of project 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
