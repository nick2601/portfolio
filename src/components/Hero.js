import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to My Portfolio</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Full-Stack Developer passionate about creating innovative solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
