import "./Hero.css";
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>
        <h1 className="hero-name">Srathna</h1>
        <h2 className="hero-title">A passionate web developer</h2>
        <p className="hero-description">
          I specialize in creating responsive and user-friendly websites using
          modern web technologies. With a strong foundation in HTML, CSS, and
          JavaScript, I am dedicated to delivering high-quality web solutions
          that meet the needs of clients and users alike.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a
            href="https://github.com/srathnasabapathi964"
            className="btn-secondary"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
