import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/users/userSlice";
import collectionReducer from "../features/collections/collectionSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    collections: collectionReducer,
  },
});
