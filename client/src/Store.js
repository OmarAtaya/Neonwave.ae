import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : undefined,
    cart: {
        shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {
            fullName: '',
            address: '',
            address2: '',
            city: '',
            country: '',
            phoneNumber: '',
        },
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    }
};

function reducer(state, action) {
    switch(action.type){
        case 'CART_ADD_ITEM':
        {
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(
                (item) => ((item._id === newItem._id) && (item.colorCheck === newItem.colorCheck) && (item.sizeCheck === newItem.sizeCheck) && (item.dimmerCheck === newItem.dimmerCheck) && (item.backingCheck === newItem.backingCheck) && (item.waterCheck === newItem.waterCheck))
            );

            const cartItems = existItem
            ? state.cart.cartItems.map((item) =>
            ((item._id === existItem._id) && (item.colorCheck === existItem.colorCheck) && (item.sizeCheck === existItem.sizeCheck) && (item.dimmerCheck === existItem.dimmerCheck) && (item.backingCheck === existItem.backingCheck) && (item.waterCheck === existItem.waterCheck)) ? newItem : item
                )
            : [...state.cart.cartItems, newItem];

            localStorage.setItem('cartItems', JSON.stringify(cartItems)) 
            return { ...state, cart: { ...state.cart, cartItems } };
        }
        case 'CART_REMOVE_ITEM':
        {
            const cartItems = state.cart.cartItems.filter( (item) => ((item._id !== action.payload._id) || (item.colorCheck !== action.payload.colorCheck) || (item.sizeCheck !== action.payload.sizeCheck) || (item.dimmerCheck !== action.payload.dimmerCheck) || (item.backingCheck !== action.payload.backingCheck) || (item.waterCheck !== action.payload.waterCheck)))
            localStorage.setItem('cartItems', JSON.stringify(cartItems)) 
            return {...state, cart: {...state.cart, cartItems}};
        }
        case 'USER_SIGNIN':
            return {...state, userInfo: action.payload}
        case 'USER_SIGNOUT':
            return {
                ...state, userInfo: null, 
                cart: { 
                    cartItems: [], 
                    shippingAddress: {}
                },
            }
        case 'SAVE_SHIPPING_ADDRESS':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    shippingAddress: action.payload,
                }
            }
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state,dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}