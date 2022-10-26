import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    loading:true,
    currentProducts:[]
}

export const productsData = createSlice({
        name:"productsData",
        initialState,
        reducers:{
        GET_DATA:(state,action)=>{
            state.loading = false
            state.products = action.payload
            state.currentProducts = action.payload
        },
        CATEGORY:(state,action)=>{
            state.currentProducts = action.payload
        }
    }
})

export const {GET_DATA,CATEGORY} = productsData.actions;

export default productsData.reducer;
