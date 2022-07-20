import { createSlice } from "@reduxjs/toolkit";

import users from "../Data/users.json"

const initialState = {
    users: users,
    userData: null
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logedin: (state, action) => {
            if (state.users.find(user => user.username === action.payload.username && user.password === action.payload.password)) {
                state.userData = action.payload;
            } else alert("The username or password you entered is incorrect")
        },
        logout: (state) => {
            state.userData = null;
        }
    }
});

export const usersReducer = usersSlice.reducer;

export const authSelector = state => Boolean(state.users.userData);
export const userSelector = state => state.users.userData;

export const { logedin, logout } = usersSlice.actions;