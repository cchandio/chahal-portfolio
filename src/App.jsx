import "./App.css";

function App() {
  return (
    <div className="page">
      <nav className="nav">
        <h2>
          Chahal <span>Chandiok</span>
        </h2>

        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="intro">Hi, I'm</p>
        <h1>Chahal Chandiok</h1>
        <h2>Data Science & Analytics Graduate</h2>

        <p className="heroText">
          I build machine learning models, analytics dashboards, and full-stack
          applications that turn messy data into clear business insights.
        </p>

        <div className="buttons">
          <a href="#projects" className="primary">
            View My Work
          </a>

          <a href="mailto:chahalchandiok@gmail.com" className="secondary">
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/chahalchandiok"
            target="_blank"
            rel="noreferrer"
            className="secondary"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="stats">
        <div>
          <h3>10,000+</h3>
          <p>Financial records processed</p>
        </div>
        <div>
          <h3>100+</h3>
          <p>Issue logs managed</p>
        </div>
        <div>
          <h3>40%</h3>
          <p>Manual tracking reduction</p>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          I recently graduated from George Mason University with a degree in
          Computational and Data Science and a minor in Systems Engineering. My
          work focuses on data analytics, machine learning, dashboards, and
          practical tools that help people make better decisions.
        </p>
      </section>

      <section className="section" id="skills">
        <h2>Skills</h2>
        <div className="skills">
          <span>Python</span>
          <span>SQL</span>
          <span>R</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Flask</span>
          <span>MongoDB</span>
          <span>Machine Learning</span>
          <span>NLP</span>
          <span>Data Visualization</span>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Featured Projects</h2>

        <div className="cards">
          <div className="card">
            <p className="tag">Finance Analytics</p>
            <h3>Arta.Guru Stock Analytics Dashboard</h3>
            <p>
              Built stock analytics pipelines and dashboards using React, Flask,
              Polygon.io, and financial market data.
            </p>
          </div>

          <div className="card">
            <p className="tag">Full-Stack Tool</p>
            <h3>StartupEd Bug Reporting System</h3>
            <p>
              Created a bug reporting platform integrated with MongoDB, Slack,
              and Linear API to make issue tracking faster and easier.
            </p>
          </div>

          <div className="card">
            <p className="tag">Research</p>
            <h3>Healthcare Volatility Research</h3>
            <p>
              Used ARCH/GARCH models to analyze event-driven volatility in
              healthcare stocks.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>Let's Connect</h2>

        <p>
          Email:{" "}
          <a href="mailto:chahalchandiok@gmail.com">
            chahalchandiok@gmail.com
          </a>
        </p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/chahalchandiok"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/chahalchandiok
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/cchandio"
            target="_blank"
            rel="noreferrer"
          >
            github.com/cchandio
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;