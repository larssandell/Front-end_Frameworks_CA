import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state) => {
            state.cartItems;
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
