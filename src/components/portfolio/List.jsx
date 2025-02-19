import React from 'react'

const List = ({list}) => {
  return (
    <div className="portfolio__list">
      {list.map((category, index) => {
        return(
          <button className="portfolio__list-item text-cs" key={index}>
            {category}
          </button>
        );
      })}
    </div>
  )
}

export default List
