import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CartSlice"
import product from "./ProductSlice"


const store =  configureStore({
     reducer:{
        card:cardReducer,
        pro:product
     }
})

export default store;