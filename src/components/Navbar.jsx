import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white fixed w-full z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Nikhil Mule</h1>
                <ul className="flex space-x-4">
                    <li><a href="#about" className="hover:text-teal-400">About</a></li>
                    <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
                    <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
