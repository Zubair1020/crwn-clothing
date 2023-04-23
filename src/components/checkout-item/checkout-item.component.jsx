import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  CheckoutItemCon,
  DeleteButton,
  ImageCon,
  Name,
  Price,
  QuantityCon,
} from "./checkout-item.style";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemToCart, clearItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemCon>
      <ImageCon>
        <img
          src={imageUrl}
          alt={`${name}`}
        />
      </ImageCon>
      <Name>{name}</Name>
      <QuantityCon as="div">
        <div
          className="arrow"
          onClick={removeItemHandler}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={addItemHandler}
        >
          &#10095;
        </div>
      </QuantityCon>
      <Price>${price}</Price>

      <div className="remove-button">
        <DeleteButton onClick={clearItemHandler}> &#10005; </DeleteButton>
      </div>
    </CheckoutItemCon>
  );
};

export default CheckoutItem;
