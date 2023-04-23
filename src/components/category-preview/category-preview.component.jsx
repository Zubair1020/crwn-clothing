import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewCon, PreviewCon, Title } from "./category.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewCon>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <PreviewCon>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </PreviewCon>
    </CategoryPreviewCon>
  );
};

export default CategoryPreview;
