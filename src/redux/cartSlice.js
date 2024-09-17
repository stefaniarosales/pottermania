import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],  // array de productos agregados al carrito.
    isOpen: false, // estado inicial  del carrito cerrado.
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {  //agregar un items al cart
            const product ={...action.payload, quantity: 1}
            if(state.items.length === 0){
                state.items.push(product)
            } else {
                const existingItemIds = new Set(state.items.map(item => item.id));
                if (existingItemIds.has(product.id)) {
                  return {
                    ...state,
                    items: state.items.map(item =>
                      item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                    ),
                  };
                } else {
                  return {
                    ...state,
                    items: [...state.items, product],
                  };
            }
        }},
        removeItem: (state, action) => {  // borrar un items del cart
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        clearCart: (state) => {   //borrar todos los items del cart
            state.items = []
        },
        updateQuantity: (state, action) => {   //actualizar la cantidad del item
            const {id,quantity} = action.payload
            const item = state.items.find(item => item.id === id)
            if(item) {
                item.quantity = quantity
            }
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        closeCart: (state) => {
            state.isOpen = false
        },
        openCart: (state) => {
            state.isOpen = true
        }
    }
})

export const {addItem, removeItem, clearCart, updateQuantity, toggleCart, closeCart, openCart} = cartSlice.actions
export default cartSlice.reducer