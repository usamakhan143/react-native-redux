/* eslint-disable prettier/prettier */
const { ADD_TO_CART } = require("./constants");

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: item
    };
}