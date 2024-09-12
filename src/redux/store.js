import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import productsReducer from './productsSlice';
import featuredproductsReducer from './featuredproductsSlice'

const store = configureStore({
    reducer: {
        menu: menuReducer,
        products: productsReducer,
        featuredProducts: featuredproductsReducer
    },
});

export default store;
