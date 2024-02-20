/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
import { ADD_TO_CART } from "./constants";

const initialState = [];
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload
            ]

        default:
            return state
            break;
    }
}