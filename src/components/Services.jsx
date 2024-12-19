// src/components/Services.js
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Services = () => {
  const [modalData, setModalData] = useState(null); // State for modal data

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Trigger animation every time the section comes into view
      mirror: true, // Re-trigger animations on scrolling back
    });
  }, []);

  // Function to handle opening the modal with details
  const openModal = (service) => {
    setModalData(service);
    const modal = new window.bootstrap.Modal(
      document.getElementById("serviceModal")
    );
    modal.show();
  };

  return (
    <section id="services" className="py-5">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center" data-aos="fade-up">
          My Services
        </h2>
        <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
          What I can do for you
        </p>

        <div className="row justify-content-center">
          {/* Full Stack Web Development */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="card shadow-sm h-100 d-flex flex-column text-center service-card">
              <div className="card-body">
                <div className="mb-3">
                  <i className="bi bi-code-slash text-primary fs-1"></i>
                </div>
                <h3 className="card-title">Full Stack Web Development</h3>
                <p className="card-text text-muted">
                  Building modern, responsive websites with a seamless backend
                  for optimal performance.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    openModal({
                      title: "Full Stack Web Development",
                      details: [
                        "Build responsive and dynamic websites.",
                        "Use modern technologies like React, Node.js, and MongoDB.",
                        "Develop seamless backend functionality for optimal user experiences.",
                      ],
                    })
                  }
                >
                  View More
                </button>
              </div>
            </div>
          </div>

          {/* App Development */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card shadow-sm h-100 d-flex flex-column text-center service-card">
              <div className="card-body">
                <div className="mb-3">
                  <i className="bi bi-phone text-success fs-1"></i>
                </div>
                <h3 className="card-title">App Development</h3>
                <p className="card-text text-muted">
                  Creating mobile applications with an intuitive interface and
                  seamless functionality.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    openModal({
                      title: "App Development",
                      details: [
                        "Develop mobile apps for Android and iOS.",
                        "Utilize frameworks like Flutter and React Native.",
                        "Create smooth and responsive user experiences across devices.",
                      ],
                    })
                  }
                >
                  View More
                </button>
              </div>
            </div>
          </div>

          {/* UI/UX Design */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="card shadow-sm h-100 d-flex flex-column text-center service-card">
              <div className="card-body">
                <div className="mb-3">
                  <i className="bi bi-palette text-warning fs-1"></i>
                </div>
                <h3 className="card-title">UI/UX Design</h3>
                <p className="card-text text-muted">
                  Designing visually appealing and user-friendly interfaces that
                  enhance user experience.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    openModal({
                      title: "UI/UX Design",
                      details: [
                        "Create wireframes and prototypes for websites and apps.",
                        "Design interfaces that are both visually appealing and functional.",
                        "Focus on intuitive user experiences that meet client needs.",
                      ],
                    })
                  }
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Service Details */}
      <div
        className="modal fade"
        id="serviceModal"
        tabIndex="-1"
        aria-labelledby="serviceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          {" "}
          {/* Center the modal */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="serviceModalLabel">
                {modalData?.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Display information as point-wise with circular arrows */}
              <ul>
                {modalData?.details.map((item, index) => (
                  <li key={index}>
                    <div className="circle-arrow">{/* Circle arrow */}</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
