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
      <section className="projects">
        <h3>Projects</h3>
        <ul>
          <li>
            <a
              href="https://github.com/WenardKen57/cv-application"
              target="__blank"
            >
              CV Application
            </a>
            <p>Simple website for building CV applications.</p>
          </li>
          <li>
            <a href="https://github.com/WenardKen57/memory-game" target="__blank">
              Memory game
            </a>
            <p>Remember what you've clicked.</p>
          </li>
          <li>
            <a href="https://github.com/WenardKen57/my-to-do-list" target="__blank">
              JS to do
            </a>
            <p>Simple to do list I've made for myself</p>
          </li>
          <li>
            <a href="" target="__blank">
              Calculator
            </a>
            <p>Simple Calculator that can do arithmetic operations</p>
          </li>
        </ul>
      </section>
      <section className="now">
        <h3>Now</h3>
        <p>
          To me learning is doing and that’s my approach to developing new
          skills, and interest.
        </p>
        <p>
          All I want to do is build websites, and now I’m starting to get
          interested with web design.
        </p>
      </section>
      <section className="connect">
        <h3>Connect</h3>
        <ul>
          <li>
            <a href="https://github.com/WenardKen57">Github</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
