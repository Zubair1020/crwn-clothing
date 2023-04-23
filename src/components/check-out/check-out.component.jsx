import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import {
  CheckoutCon,
  CheckoutHeaderCon,
  HeaderBlockCon,
  Total,
} from "./check-out.styles";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutCon>
      <CheckoutHeaderCon>
        <HeaderBlockCon>
          <span>Product</span>
        </HeaderBlockCon>
        <HeaderBlockCon>
          <span>Description</span>
        </HeaderBlockCon>
        <HeaderBlockCon>
          <span>Quantity</span>
        </HeaderBlockCon>
        <HeaderBlockCon>
          <span>Price</span>
        </HeaderBlockCon>
        <HeaderBlockCon>
          <span>Remove</span>
        </HeaderBlockCon>
      </CheckoutHeaderCon>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          cartItem={cartItem}
          key={cartItem.id}
        />
      ))}

      <Total>Total: ${cartTotal}</Total>
    </CheckoutCon>
  );
};

export default CheckOut;
