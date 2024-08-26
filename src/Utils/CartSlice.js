import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{

        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        RemoveItem:(state)=>{
            state.items.pop()
        },
        Cleartcart:(state)=>{

            state.items.length=0;
        },
    }
},

)
export const{addItem,RemoveItem,Cleartcart}=CartSlice.actions;

export default CartSlice.reducer


