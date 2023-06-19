import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../redux-store/categories/category.selector";

import { CategoryCon, CategoryTitle } from "./category.styles";
import ProductCard from "../../product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const categoriesMap = useSelector(selectCategoriesMap);

  useEffect(() => {
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
