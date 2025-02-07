import React, { useState } from "react";
import "./Portfolio.css";
import List from "./List";
import Items from "./Items";
import Data from "./Data";

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(Data)
  return (
    <section className=" work container section">
      <h2 className="section__title">Recent Works</h2>

      {/* <div className="work__filters">
        <span className="work__item">Application</span>
        <span className="work__item">Web Application</span>
        <span className="work__item">WordPress</span>
        <span className="work__item">Data Engineering</span>
      </div> */}

      <List />

      <div className="portfolio__container container grid">
        <Items projectItems={projectItems}/>
      </div>
    </section>
  );
};

export default Portfolio
