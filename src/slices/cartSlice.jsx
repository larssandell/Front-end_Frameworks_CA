import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    // cartItems: localStorage.getItem('cartItems')
    //     ? JSON.parse(localStorage.getItem('cartItems'))
    //     : [],
    totalPrice: 0,
    totalItems: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    productQuantity: (state.cartItems[
                        existingIndex
                    ].productQuantity += 1),
                };
            } else {
                let tempItem = { ...action.payload, productQuantity: 1 };
                state.cartItems.push(tempItem);
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
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
        getTotals: (state, action) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { discountedPrice, productQuantity } = cartItem;
                    const itemTotal = discountedPrice * productQuantity;
                    console.log('getTotals', itemTotal);

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += productQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.totalItems = quantity;
            state.totalPrice = total;
        },
    },
});

export const { clearCart, removeItem, increase, decrease, addItem, getTotals } =
    cartSlice.actions;

export default cartSlice.reducer;
