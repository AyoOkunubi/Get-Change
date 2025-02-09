import { configureStore } from "@reduxjs/toolkit";
import  LogIn  from "./redux/authSlice";
import productsReducer from "./redux/productsSlice";
import cartReducer from './redux/cartSlice';


export const store = configureStore({
    reducer: {
        auth: LogIn,
        products: productsReducer,
        cart: cartReducer,
    },
})