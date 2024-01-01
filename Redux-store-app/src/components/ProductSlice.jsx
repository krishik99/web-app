import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const ProductSlice = createSlice({
    name:'products',
    initialState:{data:[],state:'idle'},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            action.payload.map(v => v.quantity = 1)
            console.log(action.payload)
            state.data = [...action.payload];
            state.state="fulfilled"
        })
        .addCase(getProducts.pending,(state,action)=>{
            state.state="pending"
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.state="rejected"
        })
    }
})
// export const {add,remove} = ProductSlice.actions;
export default ProductSlice.reducer;
export const getProducts = createAsyncThunk('products/get',async ()=>{
    console.log('z')
    const data = await fetch('https://fakestoreapi.com/products')
    console.log('zzz')
    const resp = await data.json();
    console.log('zzze')
    return resp;
})