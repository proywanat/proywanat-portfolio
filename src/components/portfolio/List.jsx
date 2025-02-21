import React, { useState } from "react";

const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="portfolio__list">
      {list
        .filter((item) => item !== undefined)
        .map((category, index) => (
          <button
            key={index}
            className={`portfolio__list-item text-cs ${
              active === index ? "active-work" : ""
            }`}
            onClick={() => {
              setActive(index); 
              filterItems(category);
            }}
          >
            {category}
          </button>
        ))}
    </div>
  );
};

export default List;
