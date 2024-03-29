/* eslint-disable prettier/prettier */
const { ADD_TO_CART, REMOVE_FROM_CART } = require("./constants");

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: item
    };
}

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    };
}