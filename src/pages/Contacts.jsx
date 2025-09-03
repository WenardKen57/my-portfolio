import "./styles/Contacts.css";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDiscord,
} from "react-icons/fa";

export default function Contacts() {
  return (
    <section className="contacts">
      <h3>Connect with Me</h3>
      <ul>
        <li>
          <a
            href="https://github.com/WenardKen57"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" /> GitHub
          </a>
          <p>
            Explore my projects and code contributions on GitHub, where I share
            my latest work and collaborate with others.
          </p>
        </li>

        <li>
          <a href="mailto:wenardken57@gmail.com">
            <FaEnvelope className="contact-icon" /> Email
          </a>
          <p>
            Reach me directly at wenardken57@gmail.com for inquiries or
            collaboration opportunities.
          </p>
        </li>
        <li>
          <a href="tel:+1234567890">
            <FaPhone className="contact-icon" /> Phone
          </a>
          <p>
            Contact me at 09974653107 for quick discussions or project-related
            queries.
          </p>
        </li>
        <li>
          <a
            href="https://www.google.com/maps/place/Your+City"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt className="contact-icon" /> Address
          </a>
          <p>
            Located in Science City of Munoz, Philippines. Feel free to connect
            if you're nearby!
          </p>
        </li>
        <li>
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="contact-icon" /> Facebook
          </a>
          <p>
            Follow me on Facebook for updates on my professional journey and
            tech-related posts.
          </p>
        </li>
        <li>
          <a
            href="https://discord.gg/yourinvite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="contact-icon" /> Discord
          </a>
          <p>
            Join me on Discord (ken184) for tech chats and community
            discussions.
          </p>
        </li>
      </ul>
    </section>
  );
}
