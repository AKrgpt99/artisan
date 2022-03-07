import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

// import collectionAPI from "./collectionAPI";

const initialState = {
  loading: false,
  error: null,
  userCollections: [],
  queryCollections: [],
};

export const fetchUserCollections = createAsyncThunk(
  "collections/fetchUserCollections",
  async function (_, rejectWithValue) {
    try {
      // const user = await Auth.currentAuthenticatedUser();
      // const response = await collectionAPI.fetchAllByUser(user.attributes.sub);
      // return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const fetchCollectionById = createAsyncThunk(
  "collections/fetchCollectionById",
  async function (collectionId, { rejectWithValue }) {
    try {
      // const response = await collectionAPI.fetchOneById(collectionId);
      // return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const fetchCollectionsByUser = createAsyncThunk(
  "collections/fetchCollectionsByUser",
  async function (userId, { rejectWithValue }) {
    try {
      // const response = await collectionAPI.fetchAllByUser(userId);
      // return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const nftSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(fetchUserCollections.pending, function (state) {
      state.loading = true;
      state.userCollections = [];
    });
    builder.addCase(fetchUserCollections.fulfilled, function (state, action) {
      state.loading = false;
      state.userCollections.push(...action.payload);
    });
    builder.addCase(fetchUserCollections.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchCollectionById.pending, function (state) {
      state.loading = true;
      state.queryCollections = [];
    });
    builder.addCase(fetchCollectionById.fulfilled, function (state, action) {
      state.loading = false;
      state.queryCollections.push(action.payload);
    });
    builder.addCase(fetchCollectionById.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchCollectionsByUser.pending, function (state) {
      state.loading = true;
      state.queryCollections = [];
    });
    builder.addCase(fetchCollectionsByUser.fulfilled, function (state, action) {
      state.loading = false;
      state.queryCollections.push(...action.payload);
    });
    builder.addCase(fetchCollectionsByUser.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = nftSlice.actions;

export default nftSlice.reducer;
