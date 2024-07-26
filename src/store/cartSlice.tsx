import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // No need to return anything
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload); // Proper removal using filter
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
