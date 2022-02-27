import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import nftAPI from "./nftAPI";

const initialState = {
  loading: false,
  error: null,
  query: [],
};

export const fetchNFTById = createAsyncThunk(
  "nfts/fetchNFTById",
  async function (tokenId, { rejectWithValue }) {
    try {
      const response = await nftAPI.fetchOneById(tokenId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const fetchNFTsByUser = createAsyncThunk(
  "nfts/fetchNFTsByUser",
  async function (userId, { rejectWithValue }) {
    try {
      const response = await nftAPI.fetchAllByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const nftSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(fetchNFTById.pending, function (state) {
      state.loading = true;
      state.query = [];
    });
    builder.addCase(fetchNFTById.fulfilled, function (state, action) {
      state.loading = false;
      state.query.push(action.payload);
    });
    builder.addCase(fetchNFTById.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchNFTsByUser.pending, function (state) {
      state.loading = true;
      state.query = [];
    });
    builder.addCase(fetchNFTsByUser.fulfilled, function (state, action) {
      state.loading = false;
      state.query.push(...action.payload);
    });
    builder.addCase(fetchNFTsByUser.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = nftSlice.actions;

export default nftSlice.reducer;
