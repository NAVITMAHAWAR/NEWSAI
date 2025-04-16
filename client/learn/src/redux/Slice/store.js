import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterSlice.js";
import loadingReducer from "./loadingSlice.js";
import productReducer from "./ProductSlice.js";
import authReducer from "./authSlice.js";
import newsReducer from "./newsSlice.js";

const store = configureStore({
  reducer: {
    count: countReducer,
    loading: loadingReducer,
    product: productReducer,
    auth: authReducer,
    news: newsReducer,
  },
});

export default store;
