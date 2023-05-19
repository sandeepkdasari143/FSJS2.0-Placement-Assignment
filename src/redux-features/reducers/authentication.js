import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    authToken: null,
};

export const authSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        REGISTER: (state, action) => {
            state.id = action.payload.id;
            state.authToken = action.payload.token;
            return state;
        },
        LOGIN: (state, action) => {
            state.authToken = action.payload.token;
            return state;
        },
        LOGOUT: (state, action) => {
            state.id = null;
            state.authToken = null;
            return state;
        }
    },
});

export const { REGISTER, LOGIN, LOGOUT } = authSlice.actions;

export default authSlice.reducer;
