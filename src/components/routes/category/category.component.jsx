import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../product-card/product-card.component";
import { CategoryCon, CategoryTitle } from "./category.styles.jsx";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../redux-store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log(categoriesMap)
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
      <CategoryCon>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </CategoryCon>
    </>
  );
};

export default Category;
