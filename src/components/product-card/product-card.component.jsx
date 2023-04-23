import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { FooterCon, Name, Price, ProductCardCon } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCardCon>
      <img
        src={imageUrl}
        alt={name}
      />
      <FooterCon>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </FooterCon>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCardCon>
  );
};

export default ProductCard;
