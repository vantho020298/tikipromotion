import { ADD_MORE_PRODUCT } from '../actions/types';

export default function products(state = [], action) {
    switch (action.type) {
        case ADD_MORE_PRODUCT:
            return state.concat(action.payload);
        default:
            return state;
    }
}