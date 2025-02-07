import React, { useState } from "react";

const Items = ({ projectItems }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {projectItems.map((project) => {
        const { id, image, category, title, desc } = project;
        return (
          <div key={id} className="portfolio__items card card-two">
            <div className="portfolio__img-wrapper container">
              <a className="image-link">
                <img src={image} alt="portfolio" className="portfolio__img" />
                <div className="overlay" onClick={() => openModal(project)}>
                  <i className="fa-solid fa-eye eye-icon"></i>
                </div>
              </a>
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{desc}</p>
          </div>
        );
      })}

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>Modal Title</h2>
            <p>Modal Content here</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Items;
