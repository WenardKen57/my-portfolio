import "./styles/About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaUsers,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        {/* About Statement (spans 2 columns) */}
        <div className="about-intro">
          <h1>About</h1>
          <p>
            <strong>
              Hi, I’m Wenard Ken Santos, a 3rd-year Information Technology
              student with a passion for back-end development.
            </strong>
          </p>
          <br />
          <p>
            During my studies, I discovered my interest in{" "}
            <strong>server-side programming, databases, and APIs</strong>. I’ve
            been building projects that focus on creating scalable, secure, and
            efficient back-end systems while keeping performance in mind.
          </p>
          <br />
          <p>
            I enjoy solving <strong>complex technical problems</strong>,
            optimizing code, and designing systems that support real-world
            applications. My strengths lie in{" "}
            <strong>database management, API development, and teamwork</strong>,
            and I’m excited to grow further as a back-end developer.
          </p>

          {/* Download Resume Button */}
          <a
            href="/Wenard_Ken_Santos_Backend_Resume.pdf"
            download
            className="download-btn"
          >
            Download Resume
          </a>
        </div>

        {/* Testimonials (left column) */}
        <div className="about-panel">
          <h3>Testimonials</h3>
          <p>
            "Wenard has a strong grasp of server-side development and databases.
            He consistently delivers clean, efficient solutions and collaborates
            well with the team. His ability to troubleshoot and optimize systems
            is impressive." - <em>Jonathan Tabios, Software Engineer</em>
          </p>
        </div>

        {/* Skills & Education (right column) */}
        <div className="about-panel">
          <h3>My Skills</h3>
          <ul>
            <li>
              <FaNodeJs className="icon node" /> Node.js
            </li>
            <li>
              <FaDatabase className="icon db" /> SQL / MongoDB
            </li>
            <li>
              <FaServer className="icon server" /> RESTful APIs
            </li>
            <li>
              <FaJs className="icon js" /> JavaScript (ES6+)
            </li>
            <li>
              <FaPhp className="icon php" /> PHP
            </li>
            <li>
              <FaReact className="icon react" /> React (for front-end
              integration)
            </li>
            <li>
              <FaUsers className="icon teamwork" /> Team Collaboration / Problem
              Solving
            </li>
          </ul>

          <h3>Education</h3>
          <ul>
            <li>3rd year BS Information Technology Student</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
