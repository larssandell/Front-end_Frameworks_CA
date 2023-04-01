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
        addItem: (state, action) => {
            const existingItem = state.cartItems.find(
                (item) => item.product.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += 1;
                console.log('add quantity');
            } else {
                state.cartItems = [
                    ...state.cartItems,
                    { product: action.payload, quantity: 1 },
                ];
                console.log(state.cartItems.price);
                // state.totalItems = state.cartItems.reduce(
                //     (total, item) => total + item.quantity,
                //     0
                // );
                const updateQuantity = state.cartItems.find((total) => {
                    total.product + total.quantity;
                });
                console.log(updateQuantity);

                state.totalItems = state.cartItems.reduce(
                    (product, item) => product + item.quantity,
                    0
                );

                state.totalPrice =
                    state.totalPrice + action.payload.discountedPrice;
                console.log('add item to cart');
            }
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
