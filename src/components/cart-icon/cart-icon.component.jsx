import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartIconCon, ItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";
import ShoppingSVG from "../../assets/shopping-bag.svg";
const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconCon onClick={toggleIsCartOpen}>
      <ShoppingIcon src={ShoppingSVG} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconCon>
  );
};

export default CardIcon;
