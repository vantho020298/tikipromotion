import { ADD_TO_CART, REMOVE_PRODUCT } from '../actions/types';

export default function cart(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return isExistProduct(state, action.payload) ? state : [...state, action.payload];
        case REMOVE_PRODUCT:
            return state.filter((e) => e.deal_id !== action.payload.deal_id);
        default:
            return state;
    }
}

const isExistProduct = (state, product) => {
    return state.some((e) => e.deal_id === product.deal_id)
}