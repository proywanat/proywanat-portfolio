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
            <h2 className="modal-title">{selectedProject.modaltitle}</h2>
            <p className="modal-tag">Tag: {selectedProject.tag}</p>

            <div className="modal-content">
              <img
                src={selectedProject.imagemodal}
                alt="modal"
                className="modal-img"
              />

              <div className="modal-desc">
                {selectedProject.modaldesc
                  .trim()
                  .split("\n")
                  .map((paragraph, index) =>
                    paragraph ? (
                      <p key={index} style={{ marginBottom: "1.5rem" }}>
                        {paragraph}
                      </p>
                    ) : (
                      <br key={index} />
                    )
                  )}
              </div>

              {selectedProject.imagemodal2 && (
                <img
                  src={selectedProject.imagemodal2}
                  alt="modal"
                  className="modal-img"
                />
              )}

              {selectedProject.modaldesc2 && (
                <div className="modal-desc">
                  {selectedProject.modaldesc2
                    .trim()
                    .split("\n")
                    .map((paragraph, index) =>
                      paragraph ? (
                        <p key={index} style={{ marginBottom: "1.5rem" }}>
                          {paragraph}
                        </p>
                      ) : (
                        <br key={index} />
                      )
                    )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Items
