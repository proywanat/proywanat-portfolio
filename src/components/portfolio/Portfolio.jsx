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

  const filterItems = (category) => {
    if(category === "All") { 
      setMenuItems(Data);
      return;
    }
    const newProjectItems = Data.filter((item) => item.category === category);
    setMenuItems(newProjectItems);
  }

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <List list={navList} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        <Items projectItems={projectItems} />
      </div>
    </section>
  );
};

export default Portfolio;
