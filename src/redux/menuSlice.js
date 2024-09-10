import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleMenu: (state) => {
        state.isOpen = !state.isOpen;
        },
        closeMenu: (state) => {
        state.isOpen = false;
        },
    },
});

export const { toggleMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
