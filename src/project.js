import "./project.css";

function Project() {
    
        const projects = [
            {
                title: "Movie Search App",
                description: "Search any movie using TMDB API. Built with HTML, CSS and JavaScript.",
                tech: ["HTML", "CSS", "JavaScript"],
                live: "https://srathnasabapathi964.github.io/movie-app/",
                github: "https://github.com/srathnasabapathi964/movie-app"
                              
            },

            {
                title: "Sports Quiz App",
                description: "Interactive quiz with countdown timer, score tracking and rank system.",
                tech: ["JavaScript", "HTML", "CSS"],
                live: "https://srathnasabapathi964.github.io/quiz-app",
                github: "https://github.com/srathnasabapathi964/quiz-app"
    
            }
        ];

            return (
              <section className="projects" id="projects">
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="tech-stack">
                        {project.tech.map((tech, i) => (
                          <span className="tech-tag" key={i}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-links">
                        <a href={project.live} rel="noreferrer" target="_blank">
                          Live
                        </a>
                        <a
                          href={project.github}
                          rel="noreferrer"
                          target="_blank"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );

}
    
export default Project;