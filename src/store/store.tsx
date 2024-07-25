import { createStore } from "react-redux";
import { cartSlice } from "./cartSlice";
const store = createStore({
  reducers: [cartSlice.reducer],
});
