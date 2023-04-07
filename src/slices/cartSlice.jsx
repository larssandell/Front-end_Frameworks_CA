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
            // localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeItem: (state, action) => {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            );

            state.cartItems = nextCartItems;
            // localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
        },
        decrease: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );
            if (state.cartItems[itemIndex].productQuantity > 1) {
                state.cartItems[itemIndex].productQuantity -= 1;
            } else if (state.cartItems[itemIndex].productQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                );

                state.cartItems = nextCartItems;
            }
            // localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
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
            total = parseFloat(total.toFixed(2));
            state.totalItems = quantity;
            state.totalPrice = total;
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            // localStorage.setItem('cartItem', JSON.stringify(state.cartItems));
        },
    },
});

export const { clearCart, removeItem, increase, decrease, addItem, getTotals } =
    cartSlice.actions;

export default cartSlice.reducer;
