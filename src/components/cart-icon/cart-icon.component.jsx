import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { setIsCartOpen } from "../../redux-store/cart/cart.action.js";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../redux-store/cart/cart.selector.js";
=======
import { setIsCartOpen } from "../../redux-store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../redux-store/cart/cart.selector";
>>>>>>> dc9b14

import { CartIconCon, ItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";
import ShoppingSVG from "../../assets/shopping-bag.svg";

const CardIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
<<<<<<< HEAD

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
=======
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

>>>>>>> dc9b14
  return (
    <CartIconCon onClick={toggleIsCartOpen}>
      <ShoppingIcon src={ShoppingSVG} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconCon>
  );
};

export default CardIcon;
