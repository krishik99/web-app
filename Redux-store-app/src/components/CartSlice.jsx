import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
    name:'cart',
    initialState:{data:[]},
    reducers:{
        add:(state,action)=>{
            let existing = state.data.filter(item => item.id === action.payload.id)
            if(existing && existing.length > 0){
                let idx = state.data.findIndex(value => value.id === action.payload.id)
                state.data[idx].quantity += 1; 
                return;
            }
            state.data.push(action.payload)
            console.log(state,action)
        },
        remove:(state,action)=>{
            state.data = state.data.filter(item=>item.id !== action.payload)            
            console.log(state,action)
        },
        decreaseQuantity:(state,action)=>{
            let existing = state.data.filter(item => item.id === action.payload)
            if(existing && existing.length > 0){
                let idx = state.data.findIndex(value => value.id === action.payload)
                if(state.data[idx].quantity > 1){
                    state.data[idx].quantity -= 1; 
                }else{
                    state.data = state.data.filter(item=>item.id !== action.payload)
                }
            }
        },
        removeAll:(state,action)=>{
            state.data = []
        }
    }
})

export const {add,remove,removeAll,decreaseQuantity} = CartSlice.actions;
export default CartSlice.reducer;