export const saveState = (state, itemName) => {
    if (state.cart.length !== 0) {
        localStorage.setItem(itemName, JSON.stringify(state));
    }
};

export const getState = (itemName) => {
    try {
        const s = localStorage.getItem(itemName);
        if (s === null) return undefined;
        return JSON.parse(s);
    } catch (e) {
        return undefined;
    }
};