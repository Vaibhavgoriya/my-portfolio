// src/components/Skills.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Trigger animation every time the section comes into view
      mirror: true, // Re-trigger animations on scrolling back
    });
  }, []);

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center" data-aos="fade-up">
          My Skills
        </h2>
        <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
          What I am good at
        </p>

        <div className="row justify-content-center">
          {/* Frontend Card */}
          <div className="col-md-5 mb-4" data-aos="fade-right">
            <div className="card shadow-lg h-100">
              <div className="card-body">
                <h3 className="card-title text-center text-primary">
                  Frontend
                </h3>
                <h6 className="card-subtitle text-muted text-center mb-3">
                  Technologies I use to build user interfaces
                </h6>

                <div className="row">
                  {/* Left Column */}
                  <div className="col-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <i className="bi bi-code-slash text-primary"></i> HTML
                        <br />
                        <span className="text-muted">
                          Markup language for web pages
                        </span>
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-palette text-success"></i> CSS
                        <br />
                        <span className="text-muted">
                          Styling for web pages
                        </span>
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-filetype-js text-warning"></i>{" "}
                        JavaScript
                        <br />
                        <span className="text-muted">
                          Programming language for interactivity
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div className="col-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <i className="bi bi-bootstrap text-purple"></i>{" "}
                        Bootstrap
                        <br />
                        <span className="text-muted">
                          CSS framework for responsive design
                        </span>
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-git text-dark"></i> Git
                        <br />
                        <span className="text-muted">
                          Version control system
                        </span>
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-react text-info"></i> React
                        <br />
                        <span className="text-muted">
                          JavaScript library for UI
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="col-md-5 mb-4" data-aos="fade-right">
            <div className="card shadow-lg h-100">
              <div className="card-body">
                <h3 className="card-title text-center text-success">Backend</h3>
                <h6 className="card-subtitle text-muted text-center mb-3">
                  Technologies I use to build server-side applications
                </h6>

                <div className="row">
                  {/* Left Column */}
                  <div className="col-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <i className="bi bi-filetype-php text-primary"></i> PHP
                        <br />
                        <span className="text-muted">
                          Server-side scripting language
                        </span>
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-code text-warning"></i> Node.js
                        <br />
                        <span className="text-muted">
                          JavaScript runtime for backend
                        </span>
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-filetype-java text-danger"></i> Java
                        <br />
                        <span className="text-muted">
                          Object-oriented programming language
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div className="col-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <i className="bi bi-database text-success"></i> MySQL
                        <br />
                        <span className="text-muted">
                          Relational database management system
                        </span>
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-database text-dark"></i> MongoDB
                        <br />
                        <span className="text-muted">
                          NoSQL database for scalability
                        </span>
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-cloud-arrow-up text-info"></i>{" "}
                        Firebase
                        <br />
                        <span className="text-muted">
                          Cloud-based backend platform
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;