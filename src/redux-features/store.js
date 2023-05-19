import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authentication"
export const store = configureStore({
    reducer: {
        taskManagerAuth: authReducer,
    },
});
