import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux-store/cart/cart.selector";
import {
  addItemToCart,
<<<<<<< HEAD
  clearItemToCart,
=======
  clearItemFromCart,
>>>>>>> dc9b14
  removeItemFromCart,
} from "../../redux-store/cart/cart.action";

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

  const dispatch = useDispatch();
<<<<<<< HEAD

  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => dispatch(clearItemToCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
=======
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
>>>>>>> dc9b14
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
