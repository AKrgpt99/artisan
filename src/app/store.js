import { configureStore } from "@reduxjs/toolkit";

import nftReducer from "../features/nfts/nftSlice";
import collectionReducer from "../features/collections/collectionSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    nfts: nftReducer,
    collections: collectionReducer,
    users: userReducer,
  },
});
