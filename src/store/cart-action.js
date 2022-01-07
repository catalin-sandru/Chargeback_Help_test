import { CartSliceAction } from "./cart.slice";

export const addItemToCartAction = (item) => CartSliceAction.addItemToCart(item);
export const removeItemFromCartAction = (id, flag) => CartSliceAction.removeItemFromCart(id, flag);
export const setProductDiscountAction = (itemId, discount) =>
  CartSliceAction.setProductDiscount(itemId, discount);
export const clearStateAction = () => CartSliceAction.clearState();
