import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dishesInShoppingCartState:any = {};
const dishesInShoppingCart = createSlice({
    name: 'dishesInShoppingCart',
    initialState: {
        dishesInShoppingCartState,
    },
    reducers: {
        increaseNumberOfDish(state, action: PayloadAction<string>) {
            state.dishesInShoppingCartState[action.payload] ?
            state.dishesInShoppingCartState[action.payload] += 1 :
            state.dishesInShoppingCartState[action.payload] = 1;
        },
        reduceDish(state, action: PayloadAction<string>) {
            if(state.dishesInShoppingCartState[action.payload] > 1) {
                state.dishesInShoppingCartState[action.payload] -= 1;
            }
        },
        deleteDishFromShoppingCart(state, action: PayloadAction<string>) {
            delete state.dishesInShoppingCartState[action.payload];
        }
    }
})

export const { increaseNumberOfDish, reduceDish, deleteDishFromShoppingCart } = dishesInShoppingCart.actions;
export default dishesInShoppingCart.reducer;