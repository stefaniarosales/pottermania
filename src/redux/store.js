import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import productsReducer from './productsSlice';
import featuredproductsReducer from './featuredproductsSlice'
import cartReducer from './cartSlice'

const store = configureStore({
    reducer: {
        menu: menuReducer,
        products: productsReducer,
        featuredProducts: featuredproductsReducer,
        cart: cartReducer
    },
});

export default store;
