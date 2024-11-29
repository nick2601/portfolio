import React from 'react';

const skills = [
    { name: 'Android (Java, Kotlin)', level: 'Advanced' },
    { name: 'Flutter & Dart', level: 'Advanced' },
    { name: 'Firebase & SQLite', level: 'Intermediate' },
    { name: 'REST APIs', level: 'Advanced' },
    { name: 'UI/UX Tools (Figma, Adobe XD)', level: 'Intermediate' },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                            <p className="mt-2">{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
