import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Professional Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold">Teaching Assistant (Computer Science) - Swansea University</h3>
            <p className="text-gray-500">September 2024 - Present</p>
            <ul className="list-disc list-inside text-gray-500">
              <li>Provided one-on-one support in computer labs, assisting students with software tools, programming exercises, and troubleshooting technical issues.</li>
              <li>Actively engaged with students during classes, fostering an interactive learning environment through discussion and problem-solving.</li>
              <li>Assisted module coordinators in delivering high-quality teaching and learning experiences to undergraduate students across various computer science modules.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Software Engineer - We3 Tech Works Private Limited, Mumbai</h3>
            <p className="text-gray-500">June 2022 - January 2024</p>
            <ul className="list-disc list-inside text-gray-500">
              <li>Brainstormed and designed new feature concepts to enhance the functionality of stock market applications, aligning with evolving business requirements.</li>
              <li>Developed and implemented new features for the Asset Management Application, ensuring improved user experience and system efficiency.</li>
              <li>Programmed robust, clean, and modular code using Kotlin and XML with Android SDK 32, and successfully migrated to Android 33 to maintain up-to-date compatibility.</li>
              <li>Identified and resolved bugs using advanced debugging techniques and design patterns, enhancing the reliability and performance of projects.</li>
              <li>Integrated open-source APIs within applications to extend functionality, improving application features and user engagement.</li>
              <li>Managed server communication with background services and ensured seamless social network integration for enhanced user interaction.</li>
              <li>Led the design, build, deployment, debugging, and maintenance of Android applications for the Google Play Store, delivering high-quality, stable releases.</li>
              <li>Migrated existing application software modules from Kotlin to Flutter, contributing to cross-platform compatibility and streamlined development processes.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Software Engineer - MCLABS Private Limited, Mumbai</h3>
            <p className="text-gray-500">January 2021 – March 2022</p>
            <ul className="list-disc list-inside text-gray-500">
              <li>Developed features for LTE-based mission-critical solutions utilizing the SIP protocol, enhancing communication reliability.</li>
              <li>Implemented features in Android SIP applications in accordance with 3GPP standards.</li>
              <li>Integrated functionalities including audio and video calling, instant messaging, and file transfer over a VOIP server.</li>
              <li>Led the planning, design, development, and deployment of MCX (Mission Critical Communication) features with respect to Linphone Application.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Software Developer - NCETIS (IIT BOMBAY), Mumbai</h3>
            <p className="text-gray-500">Feb 2020 – December 2020</p>
            <ul className="list-disc list-inside text-gray-500">
              <li>Collaborated with quality engineers to ensure quality across all phases of app development.</li>
              <li>Wrote clean, self-documenting code to enhance readability and adaptability for other developers.</li>
              <li>Contributed to an agile team environment, maintaining effective communication and collaboration.</li>
              <li>Revamped the existing application by adding features based on project requirements.</li>
              <li>Implemented features including geo-location functionality.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Junior Android Developer – Edunomics Tech Solutions, Mumbai</h3>
            <p className="text-gray-500">September 2019 - Jan 2020</p>
            <ul className="list-disc list-inside text-gray-500">
              <li>Planned, designed, developed, and deployed Android applications, ensuring efficient and robust performance.</li>
              <li>Utilized experience with RESTful web services, SQLite, Google Maps, and HTTP clients to build application features.</li>
              <li>Integrated third-party libraries and APIs to enhance application functionality.</li>
              <li>Reviewed design specifications and engineering documentation, providing constructive feedback for improvements.</li>
            </ul>
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mt-16 mb-8">Education</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold">Master’s in Advanced Computer Science (In-progress)</h3>
            <p className="text-gray-500">Swansea University, UK</p>
            <p className="text-gray-500">January 2024 - January 2025</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Bachelor’s in Information Technology</h3>
            <p className="text-gray-500">Mumbai University</p>
            <p className="text-gray-500">June 2016 - May 2019</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Bachelor’s in Mechanical Engineering</h3>
            <p className="text-gray-500">Mumbai University</p>
            <p className="text-gray-500">June 2013 - May 2015</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
