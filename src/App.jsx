import "./App.css";

function App() {
  return (
    <div className="page">
      <nav className="nav">
        <h2>Chahal <span>Chandiok</span></h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="intro">Hi, I'm</p>


          <h1>Chahal Chandiok</h1>
          

          <h2>Data Science & Analytics Graduate</h2>
          <p>
            I build machine learning models, analytics dashboards, and full-stack
            applications that transform data into actionable business insights.
          </p>
          <div className="buttons">
            <a href="#projects" className="primary">View My Work</a>
            <a href="#contact" className="secondary">Contact Me</a>
          </div>
        </div>

        <div className="photoBox">
          <img src="/profile.jpeg" alt="Chahal Chandiok" />
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>
        <p>
          Recent George Mason University graduate in Computational and Data Science
          with experience in machine learning, NLP, financial analytics, React,
          Flask, SQL, and MongoDB.
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
          <span>Data Analysis</span>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Featured Projects</h2>

        <div className="cards">
          <div className="card">
            <h3>Arta.Guru Stock Analytics Dashboard</h3>
            <p>
              Processed 10,000+ financial records and built interactive stock
              analytics dashboards using React, Flask, and Polygon.io.
            </p>
          </div>

          <div className="card">
            <h3>StartupEd Bug Reporting System</h3>
            <p>
              Built a bug reporting platform integrated with MongoDB, Slack, and
              Linear API to streamline issue tracking.
            </p>
          </div>

          <div className="card">
            <h3>Healthcare Volatility Research</h3>
            <p>
              Applied ARCH/GARCH models to analyze event-driven volatility in
              healthcare stocks.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>Let's Connect</h2>
        <p>Email: chahalchandiok@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/chahalchandiok</p>
        <p>GitHub: github.com/chahalchandiok</p>
      </section>
    </div>
  );
}

export default App;