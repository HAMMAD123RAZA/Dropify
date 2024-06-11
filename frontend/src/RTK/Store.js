import { configureStore } from '@reduxjs/toolkit';
import CartSllice from './CartSllice';


const store=configureStore({
    reducer:{
        cart:CartSllice
    }
})

export default store;