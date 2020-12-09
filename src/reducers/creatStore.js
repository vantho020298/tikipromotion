import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';
import { moreProduct } from './../actions';
import { getState , saveState } from './../localStorage/localStorage';

export default function createNewStore() {
    const initialState = getState('cart');
    // const initialState = undefined;
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    store.dispatch(moreProduct());
    
    store.subscribe(() => {
      saveState({
        cart: store.getState().cart
      }, 'cart')
    })

    return store;
}