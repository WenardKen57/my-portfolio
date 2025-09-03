import NavBar from "../NavBar";
import Prof from "./../assets/prof-2.JPG";
import "./styles/Home.css";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="homePage">
      <div className="twoPanel">
        <section className="heroSection">
          <h1>Wenard Ken</h1>
          <p>
            Back-End Developer | Building scalable APIs, databases, and robust
            server-side applications.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/WenardKen57"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:wenardken57@gmail.com" aria-label="Email">
              <FaEnvelope className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </section>
        <div className="profileSection">
          <img id="profile" src={Prof} alt="profile" />
        </div>
      </div>
    </div>
  );
}
