import { createSlice } from '@reduxjs/toolkit';
import ProductList from './ProductList';
import CartItem from './CartItem';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        alert('inside');
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
       
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
    },
  },
});

/* export  default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoAdded': {
          return {
    addItem, 
    removeItem, 
    updateQuantity, 
} = CartSlice.actions;

 export const { 
    removeitem, 
    updatequantity, 
} = ( removeItem, updateQuantity) => CartItem.actions;

*/
export const { additem } =  ProductList.actions;

export default CartSlice.reducer; 
//export const Store = () =>{};
