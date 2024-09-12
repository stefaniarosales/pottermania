import { createSlice } from "@reduxjs/toolkit"
import { productsforsale } from "../data/products"

const initialState = {
    featuredProducts: [],
}

const featuredProductsSlice = createSlice({
    name: 'featuredProducts',
    initialState,
    reducers: {
        setFeaturedProducts: (state) => {
            const shuffledProducts = [...productsforsale].sort(() => 0.5 - Math.random())
            state.featuredProducts = shuffledProducts.slice(0,6)
        }
    }
})

export const { setFeaturedProducts } = featuredProductsSlice.actions
export default featuredProductsSlice.reducer