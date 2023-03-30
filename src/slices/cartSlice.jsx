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
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId
            );
        },
        // cartItem amount must be changed when i add quantity
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === payload.id
            );
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === payload.id
            );
            cartItem.amount = cartItem.amount - 1;
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
});

export const { clearCart, removeItem, increase, decrease, addItem } =
    cartSlice.actions;

export default cartSlice.reducer;
