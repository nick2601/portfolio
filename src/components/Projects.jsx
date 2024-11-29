import React from 'react';

const projects = [
    {
        title: 'E-Commerce App',
        description: 'A full-featured e-commerce app with a payment gateway.',
        link: 'https://github.com/nick2601/ecommerce-app',
    },
    {
        title: 'Mission Critical SIP App',
        description: 'SIP-based LTE solution for mission-critical communication.',
        link: 'https://github.com/nick2601/sip-app',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-teal-500 mt-4 block">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
