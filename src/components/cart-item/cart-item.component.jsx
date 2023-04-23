import { CartItemCon, ItemDetailsCon } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemCon>
      <img
        src={imageUrl}
        alt={`${name}`}
      />
      <ItemDetailsCon>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </ItemDetailsCon>
    </CartItemCon>
  );
};

export default CartItem;
