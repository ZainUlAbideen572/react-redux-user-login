import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "../components/features/userslice"
export default configureStore({
    reducer:{
        user:userReducer
    }
})