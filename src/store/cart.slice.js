import { createSlice } from "@reduxjs/toolkit";

const findItem = (itemArr, itemId) => {
  return itemArr.findIndex((i) => i.id === itemId);
};

const calculateTotal = (itemArr) => {
  if (itemArr.length < 1) return 0;

  return itemArr
    .map((t) => (t.newPrice > 0 ? t.newPrice : t.total))
    .reduce((acc, curr) => acc + curr);
};

const initialState = {
  cartItems: [],
  cartTotal: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const cartItem = findItem(state.cartItems, item.id);

      if (cartItem === -1) {
        state.cartItems.push({ ...item, count: 1, total: item.price, inCart: true });
        state.cartTotal = state.cartTotal + item.price;
      } else {
        const currentItem = state.cartItems[cartItem];
        currentItem.count++;
        currentItem.total = currentItem.count * currentItem.price;

        if (currentItem.voucherValue !== 0) {
          const calculateDiscount = (currentItem.total / 100) * currentItem.voucherValue;
          currentItem.newPrice = currentItem.total - calculateDiscount;
        }
        state.cartTotal = calculateTotal(state.cartItems);
      }
    },
    removeItemFromCart: (state, action) => {
      const { id, inCart } = action.payload;
      const cartItem = findItem(state.cartItems, id);
      const currentItem = state.cartItems[cartItem];

      if (currentItem.count > 1 && inCart) {
        currentItem.count--;
        currentItem.total = currentItem.count * currentItem.price;

        if (currentItem.voucherValue !== 0) {
          const calculateDiscount = (currentItem.total / 100) * currentItem.voucherValue;
          currentItem.newPrice = currentItem.total - calculateDiscount;
        }

        state.cartTotal = calculateTotal(state.cartItems);
      } else {
        const updatedCartItems = state.cartItems.filter((i) => i.id !== id);
        state.cartItems = updatedCartItems;
        state.cartTotal = calculateTotal(state.cartItems);
      }
    },
    setProductDiscount: (state, action) => {
      const { itemId, discount } = action.payload;
      const cartItem = findItem(state.cartItems, itemId);
      const currentItem = state.cartItems[cartItem];
      currentItem.voucherValue = discount;

      const { total } = currentItem;
      const calculateDiscount = (total / 100) * discount;
      currentItem.newPrice = total - calculateDiscount;
      state.cartTotal = calculateTotal(state.cartItems);
    },
    clearState: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
    },
  },
});

export const CartSliceAction = CartSlice.actions;

export default CartSlice.reducer;
