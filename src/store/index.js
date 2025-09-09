import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import usersReducer from "./usersSlice"
import categoriesReducer from "./categorySlice"
import productsReducer from "./productSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    users:usersReducer,
    categories:categoriesReducer,
    products:productsReducer,
  },
});

export default store;
