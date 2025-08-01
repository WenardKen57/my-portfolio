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
            I specialize in creating user-friendly, responsive websites using
            modern technologies like HTML, CSS, JavaScript, and React. I've
            worked on projects like Events Reservation Management.
          </p>
        </div>

        {/* Testimonials (left column) */}
        <div className="about-panel">
          <h3>Testimonials</h3>
          <p>
            "Working with Wenard Ken was a pleasure. His front-end skills and
            attention to detail delivered a seamless user experience on our
            project.” - <em>Jonathan Tabios, PM</em>
          </p>
          <p>
            "Wenard Ken’s ability to translate designs into responsive,
            functional websites is impressive. They made collaboration
            effortless." - <em>Jeffrey Aguasan, UI/UX</em>
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
