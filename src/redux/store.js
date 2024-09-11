import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import productsReducer from './productsSlice';

const store = configureStore({
    reducer: {
        menu: menuReducer,
        products: productsReducer
    },
});

export default store;
