import NavBar from "../NavBar";
import Prof from"./../assets/prof.jpeg";
import "./styles/Home.css";


export default function Home() {
  return (
    <div className="homePage">
      <section className="heroSection">
        <h2>Wenard Ken</h2>
        <p>
          Hi, welcome to my portfolio. I like building polished software and web
          experiences. Currently studying in college.
        </p>
      </section>
      <img id="profile" src={Prof} alt="profile" />

    </div>
  );
}
