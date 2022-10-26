import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./productsDataSlice"

export const store = configureStore({
    reducer:{
        products:ProductsReducer,
    }
})