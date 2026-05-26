import "./contact.css";

function Contact() {
return (
  <section className="contact" id="contact">
    <h2 className="section-title">Contact Me</h2>
    <p className="contact-description">
      Feel free to reach out for collaborations or just a friendly hello!
    </p>
    <div className="contact-links">
      <a href="mailto:srathnasabpathi964@gmail.com" className="contact-btn">
        Email me
      </a>

      <a
        href="https://github.com/srathnasabapathi964"
        className="contact-btn"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/srathnasabapathi123"
        className="contact-btn"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </section>
);}

export default Contact;