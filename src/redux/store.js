import { configureStore } from "@reduxjs/toolkit";

import { usersReducer } from "./userSlice";
import { newsReducer } from "./newsSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        news: newsReducer
    },
});

export default store;