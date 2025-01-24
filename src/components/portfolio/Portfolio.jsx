import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItem] = useState(Menu);
  return (
    <section className=" work container section">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item">Application</span>
        <span className="work__item">Web Application</span>
        <span className="work__item">WordPress</span>
        <span className="work__item">Data Engineering</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, desc, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <div className="work__desc">{desc}</div>
              <a href="#" className="work__button">
                <i className="icon-eye work__button-icon"></i>
              </a>
              <a
                href={link || "#"}
                className={`work__button__link ${!link ? "disabled-link" : ""}`}
                target={link ? "_blank" : "_self"}
                rel={link ? "noopener noreferrer" : ""}
                onClick={(e) => !link && e.preventDefault()}
              >
                <i className="icon-social-github work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio
