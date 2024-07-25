import CreateSlice from "@reduxjs/toolkit";

const cartSlice = CreateSlice({
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      return { state, ...action.payload };
    },
    removeFromCart: (state, id) => {
      return state.map((item) => {
        return item.id !== id;
      });
    },
  },
});
export const [addToCart, removeFromCart] = cartSlice.actions;
export default cartSlice.reducer;
