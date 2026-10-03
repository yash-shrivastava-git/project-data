import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">React<span>Pro</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-btn">Get Started</button>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tag">🚀 Learn React.js Easily</p>

          <h1>
            Build Amazing
            <br />
            <span>React Websites</span>
          </h1>

          <p className="description">
            Learn React.js from beginner to advanced and create beautiful,
            modern and animated websites.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Start Learning →</button>
            <button className="secondary-btn">Explore Courses</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="circle"></div>

          <div className="code-box">
            <span>&lt;</span>
            <b>React</b>
            <span>/&gt;</span>
            <p>Build • Learn • Create</p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="courses" id="courses">
        <p className="section-tag">LEARN WITH US</p>
        <h2>Popular Courses</h2>

        <div className="card-container">
          <div className="course-card">
            <div className="icon">⚛️</div>
            <h3>React.js Basics</h3>
            <p>
              Learn components, JSX, props, state and React fundamentals.
            </p>
            <button>Learn More →</button>
          </div>

          <div className="course-card">
            <div className="icon">🎨</div>
            <h3>UI Design</h3>
            <p>
              Create beautiful responsive interfaces using modern CSS.
            </p>
            <button>Learn More →</button>
          </div>

          <div className="course-card">
            <div className="icon">⚡</div>
            <h3>Advanced React</h3>
            <p>
              Learn hooks, APIs, routing and advanced React development.
            </p>
            <button>Learn More →</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div>
          <p className="section-tag">WHY REACT?</p>
          <h2>Create. Animate. Inspire.</h2>
        </div>

        <p>
          React.js helps you build fast and interactive web applications.
          With reusable components and modern development tools, you can
          create professional websites easily.
        </p>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Ready to Start?</h2>
        <p>Start your React.js journey today 🚀</p>
        <button className="primary-btn">Join Now</button>
      </section>

      <footer>
        <p>© 2026 ReactPro | Made with React.js ❤️</p>
      </footer>
    </div>
  );
}

export default App;