import { configureStore } from "@reduxjs/toolkit";

import nftReducer from "../features/nfts/nftSlice";
import collectionReducer from "../features/collections/collectionSlice";

export const store = configureStore({
  reducer: {
    nfts: nftReducer,
    collections: collectionReducer,
  },
});
