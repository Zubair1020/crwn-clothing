import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../redux-store/cart/cart.action";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../redux-store/cart/cart.selector";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownCon,
  CartItemsCon,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const handelCheckOutClick = () => {
    dispatch(setIsCartOpen(!isCartOpen));
    navigate("/checkout");
  };
  return (
    <CartDropdownCon>
      <CartItemsCon>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              cartItem={item}
            />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsCon>
      <Button onClick={handelCheckOutClick}>GO TO CHECKOUT</Button>
    </CartDropdownCon>
  );
};

export default CartDropdown;
