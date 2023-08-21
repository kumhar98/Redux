import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    add:{
        reducer: (state, action) => {
            state.push(action.payload)
          },
          prepare: (item) => {
            const quantity = 1;
            return { payload: { quantity,...item } }
          },
    },
    remove(state, action) {  //payload should be productId
      return state.filter(product=>product.id !== action.payload);
    },
    increment(state, action) { // payload should be productId
         state.filter(product=>product.id===action.payload)[0].quantity+=1;

    },
    decrement(state, action) {

      const updateQuantity = state.filter(product=>product.id===action.payload);
      if (updateQuantity[0].quantity > 1) {
        updateQuantity[0].quantity -=1;
      }

      // const updateQuantity = state.filter(
      //   (product) => product.id === action.payload
      // );

      // if (updateQuantity.length > 0 && updateQuantity[0].quantity > 1) {
      //   updateQuantity[0].quantity -= 1;
      // }

      // return state;
    },
} 
});

export const { add, remove, increment, decrement } = CartSlice.actions;

export default CartSlice.reducer;
