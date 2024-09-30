import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import menuReducer from './menuSlice'
import productsReducer from './productsSlice'
import featuredproductsReducer from './featuredproductsSlice'
import cartReducer from './cartSlice'
import scrollReducer from './scrollSlice'

// Configuración de redux-persist para el carrito
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

// Combina todos los reducers
const rootReducer = combineReducers({
    menu: menuReducer,
    products: productsReducer,
    featuredProducts: featuredproductsReducer,
    cart: cartReducer,
    scroll: scrollReducer
})

// Aplica persistencia a los reducers
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
        
});

export const peristor = persistStore(store)
export default store
