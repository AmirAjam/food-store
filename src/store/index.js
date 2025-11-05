import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import usersReducer from "./usersSlice"
import categoriesReducer from "./categorySlice"
import productsReducer from "./productSlice"
import cartReducer from "./cartSlice"
import addressReducer from "./addressSlice"
import favoriteReducer from "./favouriteSlice"
import coupenReducer from "./coupensSlice"
import orderReducer from "./orderSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    users:usersReducer,
    categories:categoriesReducer,
    products:productsReducer,
    cart:cartReducer,
    address:addressReducer,
    favorite:favoriteReducer,
    coupen:coupenReducer,
    order:orderReducer,
  },
});

export default store;
