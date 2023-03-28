import React from "react";
import CategoriesData from "../../categories.json";
import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss";

const Directory = () => (
  <div className="categories-container">
    {CategoriesData.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default Directory;
