import React from 'react';

const Categories = (props) => {
  const { categories, categoryFilter } = props;
  // console.log(categoryFilter);
  return (
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
          <button key={index} type="button" className="filter-btn" onClick={() => {
            categoryFilter(category);
          }}>{category}</button>
          )
        })}
      </div>
    )
};

export default Categories;
