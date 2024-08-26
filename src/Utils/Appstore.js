import { configureStore, createReducer } from "@reduxjs/toolkit";
import Cart from "../components/Cart";
import cartReducer from "./CartSlice"


const Appstore=configureStore({

    reducer:{
        cart:cartReducer,
    },

})

export default Appstore