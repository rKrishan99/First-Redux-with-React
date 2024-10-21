import { configureStore } from "@reduxjs/toolkit";
import couterReducer from './slices/counter' 


const store = configureStore({
    reducer : couterReducer,
})

export default store;