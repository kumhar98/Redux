import { createSlice } from "@reduxjs/toolkit";
export const statuses = Object.freeze({
    Success: 'success',
    Errors: 'Errors',
    Loading: 'Loading'
  });
  

const ProductSlice = createSlice({
   name:'product',
   initialState:{
    data:[],
    status:statuses.Success
   },
   reducers:{
     setProduct(state,action){
        state.data = action.payload; 
     },
     setStatus(state,action){
         state.status = action.payload
     }
   }
})

export const {setProduct,setStatus} = ProductSlice.actions;

export default ProductSlice.reducer;

/********************  Middleware *****************/
export function fetchProducts() {
     return async function fetchProductsThunk(dispatch){
         dispatch(setStatus(statuses.Loading)); 
         try {
              const res = await fetch("https://fakestoreapi.com/products");
              const data = await res.json();
               dispatch(setProduct(data));
              dispatch(setStatus(statuses.Success)); 


         } catch (error) {
             console.log(error);
             dispatch(setStatus(statuses.Errors));
         }
     }
}