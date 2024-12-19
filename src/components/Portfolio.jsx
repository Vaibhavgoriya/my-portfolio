import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ecom from "../assets/images/ecom.jpg"; // Adjust the path as per your folder structure
import ecomapp from "../assets/images/dashecom.jpg"; // Adjust the path as per your folder structure
import food from "../assets/images/food.jpg"; // Adjust the path as per your folder structure

const Portfolio = () => {
  const [modalData, setModalData] = useState(null); // State for modal data

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Animation happens only once when scrolling to the element
    });
  }, []);

  // Function to handle opening the modal with project details
  const openModal = (project) => {
    setModalData(project);
    const modal = new window.bootstrap.Modal(
      document.getElementById("portfolioModal")
    );
    modal.show();
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce website with admin panel support.",
      imageUrl: ecom, // Direct reference to the image path
      codeLink: "https://github.com/Vaibhavgoriya/Inventory_mng_system",
      details: [
        "User-friendly UI with secure login and registration.",
        "Admin panel for managing inventory and sales.",
        "Integrated payment gateway for online transactions.",
      ],
    },
    {
      id: 2,
      title: "E-Commerce Mobile Application",
      description: "A responsive mobile app for online shopping.",
      imageUrl: ecomapp, // Direct reference to the image path
      codeLink:
        "https://github.com/Vaibhavgoriya/E_COM_APP/tree/main/user_panel",
      details: [
        "Cross-platform Flutter application for Android and iOS.",
        "Cart and checkout functionality.",
        "Push notifications for order updates.",
      ],
    },
    {
      id: 3,
      title: "Food Delivery Management System",
      description: "A web app for managing food deliveries.",
      imageUrl: food, // Direct reference to the image path
      codeLink: "https://github.com/Vaibhavgoriya/Food-Delivery-Management-System",
      details: [
        "Efficient order tracking for users and restaurants.",
        "Real-time updates for delivery status.",
        "Admin tools for managing menus and orders.",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="text-center" data-aos="fade-up">
          My Projects
        </h2>
        <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
          My Work
        </p>

        <div className="row">
          {projects.map((project) => (
            <div
              className="col-12 mb-4"
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
              key={project.id}
            >
              <div
                className="card shadow-sm h-100"
                style={{ backgroundColor: "#003362", color: "#fff" }}
              >
                <div className="row g-0">
                  {/* Image Section */}
                  <div className="col-md-4">
                    <img
                      src={project.imageUrl}
                      className="img-fluid rounded-start"
                      alt={project.title}
                    />
                  </div>
                  {/* Content Section */}
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title ">{project.title}</h3>
                      <p className="card-text">{project.description}</p>
                      <div>
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => openModal(project)}
                        >
                          View Details
                        </button>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      <div
        className="modal fade"
        id="portfolioModal"
        tabIndex="-1"
        aria-labelledby="portfolioModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="portfolioModalLabel">
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
              <ul>
                {modalData?.details.map((item, index) => (
                  <li key={index}>
                    <div className="circle-arrow"></div>
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

export default Portfolio;
