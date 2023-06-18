import React from "react";
import CategoryItem from "../catogory-items/category-item.component";
import "./categories-list.style.scss";

const categoriesList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default categoriesList;
