import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import productsReducer from './productsSlice';
import featuredproductsReducer from './featuredproductsSlice'
import cartReducer from './cartSlice'
import scrollReducer from './scrollSlice'

const store = configureStore({
    reducer: {
        menu: menuReducer,
        products: productsReducer,
        featuredProducts: featuredproductsReducer,
        cart: cartReducer,
        scroll: scrollReducer
    },
});

export default store;
