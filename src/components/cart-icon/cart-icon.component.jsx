import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../redux-store/cart/cart.action.js";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../redux-store/cart/cart.selector.js";

import { CartIconCon, ItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";
import ShoppingSVG from "../../assets/shopping-bag.svg";

const CardIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconCon onClick={toggleIsCartOpen}>
      <ShoppingIcon src={ShoppingSVG} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconCon>
  );
};

export default CardIcon;
