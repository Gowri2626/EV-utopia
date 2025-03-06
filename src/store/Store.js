import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/Cartslice';


const Store = configureStore({
    reducer: {
        cart: cartReducer
    }
});


export default Store;