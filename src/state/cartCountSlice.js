import { createSlice } from "@reduxjs/toolkit";

const cartItemCountSlice = createSlice({
  name: "cartItems",
  initialState: { count: 0, items: [] },
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
    resetCount: (state, action) => {
      state.count = action.payload;
    },
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      state.items = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  incrementCount,
  decrementCount,
  resetCount,
  addItem,
  removeItem,
  clearCart,
} = cartItemCountSlice.actions;
export default cartItemCountSlice.reducer;
