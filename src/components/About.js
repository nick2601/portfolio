import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">About Me</h2>
          <p className="mt-4 text-lg text-gray-500">
            Highly motivated Software Engineer with over 4 years of experience in mobile application development,
            specializing in Android and Flutter technologies. Experienced in developing robust, scalable applications and
            implementing advanced features using Kotlin, Java, and Dart. Strong background in implementing clean
            code, agile development practices, and deploying apps on Google Play Store. Currently pursuing a Master’s
            in Advanced Computer Science, eager to leverage my skills in a challenging role.
          </p>
          <h3 className="text-2xl font-bold mt-8">Technical Skills</h3>
          <ul className="list-disc list-inside text-gray-500">
            <li>Mobile Application Development: Android (Java & Kotlin), Flutter & Dart</li>
            <li>Programming Languages: C, C++, Java, Python, Kotlin, Dart, JavaScript</li>
            <li>Database Frameworks: MySQL, SQLite, Google Firebase, Room, Hive</li>
            <li>Web Technologies: HTML, CSS, JavaScript</li>
            <li>Software Development Tools: Android Studio, IntelliJ IDEA, Visual Studio, Eclipse, NetBeans</li>
            <li>Version Control: Git, GitHub, GitLab</li>
            <li>UI/UX Tools: Material Design, Figma, Adobe XD</li>
            <li>Software Architecture Patterns: MVVM, MVP, MVC, BLOC, Riverpod</li>
            <li>Testing & Debugging: JUnit, Mockito, Espresso, UI Automator</li>
            <li>Cloud & APIs: Retrofit, Volley, OkHttp3, HttpURLConnection, REST APIs</li>
            <li>Agile Workflow: JIRA, Trello, GitHub Boards</li>
            <li>Jetpack Components: LiveData, ViewModel, Navigation, Data-Binding, Jetpack Compose</li>
            <li>MultiThreading: RxJava, RxKotlin, RxAndroid, Kotlin Coroutines</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
