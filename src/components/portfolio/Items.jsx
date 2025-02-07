import React from "react";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItems) => {
        const { id, image, category, title, desc } = projectItems;
        return (
          <div className="portfolio__items card card-two">
            <div className="portfolio__img-wrapper container">
              <a className="image-link" href="#">
                <img src={image} alt="portfolio" className="portfolio__img" />
                <div className="overlay">
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
    </>
  );
};

export default Items;
