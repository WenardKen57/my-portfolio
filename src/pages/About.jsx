import "./styles/About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaUsers,
  FaMobileAlt,
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
              student with a passion for project management.
            </strong>
          </p>
          <br />
          <p>
            During my 2nd year, I had the opportunity to{" "}
            <strong>lead a student team project</strong>, where I coordinated
            tasks, aligned deadlines, and made sure our group delivered results
            successfully. That experience sparked my interest in{" "}
            <strong>project management and leadership</strong>, and I’ve been
            building on those skills ever since.
          </p>
          <br />
          <p>
            I enjoy working with{" "}
            <strong>different kinds of people and disciplines</strong>, making
            sure ideas turn into action. My strengths lie in organization,
            communication, and problem-solving, and I’m eager to apply these
            skills to real-world projects.
          </p>
        </div>

        {/* Testimonials (left column) */}
        <div className="about-panel">
          <h3>Testimonials</h3>
          <p>
            "Working with Wenard Ken Santos was a great experience. As our team
            leader, they made sure everyone understood their responsibilities,
            kept us on track, and motivated us to push through challenges. They
            have a natural ability to bring people together and deliver results"
            - <em>Jonathan Tabios, Back end</em>
          </p>
        </div>

        {/* Skills & Education (right column) */}
        <div className="about-panel">
          <h3>My Skills</h3>
          <ul>
            <li>
              <FaHtml5 className="icon html" /> HTML
            </li>
            <li>
              <FaCss3Alt className="icon css" /> CSS
            </li>
            <li>
              <FaJs className="icon js" /> JavaScript
            </li>
            <li>
              <FaReact className="icon react" /> React
            </li>
            <li>
              <FaMobileAlt className="icon responsive" /> Responsive Design
            </li>
            <li>
              <FaUsers className="icon teamwork" /> Team Work / Problem Solving
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
