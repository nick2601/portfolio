import React from 'react';

export default function Hero() {
    return (
        <section className="h-screen bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Hi, I'm Nikhil Mule</h1>
                <p className="mt-4 text-lg">Software Engineer | Mobile App Developer</p>
                <a href="#contact" className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-lg">
                    Let's Connect
                </a>
            </div>
        </section>
    );
}
