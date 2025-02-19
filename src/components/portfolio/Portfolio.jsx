import React, { useState } from "react";
import "./Portfolio.css";
import List from "./List";
import Items from "./Items";
import Data from "./Data";

const allNavList =  ["All", ...new Set(Data.map((Data) => Data.category))];
console.log(allNavList);

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(Data);
  const [navList, setCategory] = useState(allNavList);

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <List list={navList} />

      <div className="portfolio__container container grid">
        <Items projectItems={projectItems} />
      </div>
    </section>
  );
};

export default Portfolio;
