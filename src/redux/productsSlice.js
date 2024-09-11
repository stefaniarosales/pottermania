import { createSlice } from "@reduxjs/toolkit"
import { productsforsale } from "../data/products"

const initialState = {
    products: productsforsale,
    selectedCategory: 'todos',
    visibleProducts: 8,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.visibleProducts = 8
        },
        loadMoreProducts: (state) => {
            state.visibleProducts += 4
        }
    },
})

export const { selectCategory, loadMoreProducts} = productsSlice.actions
export default productsSlice.reducer