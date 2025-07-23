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
            <h4>CV Application</h4>
            <p>Simple website for building CV applications.</p>
          </li>
          <li>
            <h4>Memory game</h4>
            <p>Remember what you've clicked.</p>
          </li>
          <li>
            <h4>Recipe website</h4>
            <p>Want to cook something nice?</p>
          </li>
        </ul>
      </section>
      <section className="now"></section>
      <section className="connect"></section>
    </div>
  );
}
