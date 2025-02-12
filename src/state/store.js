import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import productReducer from "./productSlice";
import cartCountReducer from "./cartCountSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    product: productReducer,
    cartItems: cartCountReducer,
  },
});

export default store;
