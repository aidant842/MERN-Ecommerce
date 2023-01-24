import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import { cartItemsFromStorage } from "../store";

export const cartReducer = (
    state = { cartItems: cartItemsFromStorage },
    action
) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(
                (x) => x.productId === item.productId
            );

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.productId === existItem.productId ? item : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (x) => x.productId !== action.payload
                ),
            };
        default:
            return state;
    }
};
