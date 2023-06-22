import createAction from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

<<<<<<< HEAD
const clearItemToCartHelper = (cartItems, itemToDelete) => {
=======
const clearItemFromCartHelper = (cartItems, itemToDelete) => {
>>>>>>> dc9b14
  return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

// *********************Actions*****************

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeItemCart(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
<<<<<<< HEAD
export const clearItemToCart = (cartItems, itemToDelete) => {
  const newCartItems = clearItemToCartHelper(cartItems, itemToDelete);
=======
export const clearItemFromCart = (cartItems, itemToDelete) => {
  const newCartItems = clearItemFromCartHelper(cartItems, itemToDelete);
>>>>>>> dc9b14
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
