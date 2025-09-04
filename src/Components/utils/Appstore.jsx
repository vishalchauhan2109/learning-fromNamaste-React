import { configureStore } from "@reduxjs/toolkit";
// import Cart from "../../Cart";
import cartReducer from "./cartSlice"


const appStore = configureStore({

    reducer : {
        cart: cartReducer
    },

})

export default appStore