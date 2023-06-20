import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux-store/cart/cart.selector";

import CheckoutItem from "../checkout-item/checkout-item.component";
import {
  CheckoutCon,
  CheckoutHeaderCon,
  HeaderBlockCon,
  Total,
} from "./check-out.styles";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
