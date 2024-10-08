import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],  // array de productos agregados al carrito.
        isOpen: false // estado inicial  del carrito cerrado.
    },
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
        }
    }
})

export const {addItem, removeItem, clearCart, updateQuantity, toggleCart} = cartSlice.actions
export default cartSlice.reducer