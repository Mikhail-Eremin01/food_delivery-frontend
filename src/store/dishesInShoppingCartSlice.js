import { createSlice } from "@reduxjs/toolkit";

const dishesInShoppingCart = createSlice({
    name: 'dishesInShoppingCart',
    initialState: {
        dishesInShoppingCart: {},
    },
    reducers: {
        increaseNumberOfDish(state, action) {
            state.dishesInShoppingCart[action.payload.name] ?
            state.dishesInShoppingCart[action.payload.name] += 1 :
            state.dishesInShoppingCart[action.payload.name] = 1;
        },
        reduceDish(state, action) {
            if(state.dishesInShoppingCart[action.payload.name] > 1) {
                state.dishesInShoppingCart[action.payload.name] -= 1;
            }
        },
        deleteDishFromShoppingCart(state, action) {
            delete state.dishesInShoppingCart[action.payload.name];
        }
    }
})

export const { increaseNumberOfDish, reduceDish, deleteDishFromShoppingCart } = dishesInShoppingCart.actions;
export default dishesInShoppingCart.reducer;