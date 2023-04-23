import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CartIconCon, ItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";

const CardIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconCon onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconCon>
  );
};

export default CardIcon;
