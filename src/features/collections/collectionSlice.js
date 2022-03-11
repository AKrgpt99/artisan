import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API, graphqlOperation } from "aws-amplify";

import { searchCollections as searchCollectionsAPI } from "../../graphql/queries";
import { createCollection as createCollectionAPI } from "../../graphql/mutations";

const initialState = {
  loading: false,
  error: null,
  collections: [],
};

export const fetchCollectionsByName = createAsyncThunk(
  "collections/fetchCollectionByName",
  async function (name, { rejectWithValue }) {
    try {
      const { data } = await API.graphql(
        graphqlOperation(searchCollectionsAPI, {
          filter: { name: { eq: name } },
        })
      );
      return data.searchCollections.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createCollection = createAsyncThunk(
  "collections/createCollection",
  async function (collectionDetails, { rejectWithValue }) {
    try {
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const collectionSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(fetchCollectionsByName.pending, function (state) {
      state.loading = true;
    });
    builder.addCase(fetchCollectionsByName.fulfilled, function (state, action) {
      state.loading = false;
      state.collections = action.payload;
    });
    builder.addCase(fetchCollectionsByName.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = collectionSlice.actions;

export default collectionSlice.reducer;
