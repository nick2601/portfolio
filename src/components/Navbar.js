import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center py-4">
              <span className="font-semibold text-gray-500 text-lg">Portfolio</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#about" className="py-4 px-2 text-gray-500 hover:text-gray-900">About</a>
            <a href="#projects" className="py-4 px-2 text-gray-500 hover:text-gray-900">Projects</a>
            <a href="#contact" className="py-4 px-2 text-gray-500 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
