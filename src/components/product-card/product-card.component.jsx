import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux-store/cart/cart.action";
import { selectCartItems } from "../../redux-store/cart/cart.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { FooterCon, Name, Price, ProductCardCon } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
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
