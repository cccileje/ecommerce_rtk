import { createSlice } from '@reduxjs/toolkit'

const initalState = {
    cartItems: []
};

const CartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        // [action name]: [reducer function]
    }
});
