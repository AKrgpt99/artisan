import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Auth, graphqlOperation } from "aws-amplify";
import { API } from "aws-amplify";

import { getUser, listUsers } from "../../graphql/queries";
import { createUser } from "../../graphql/mutations";

const initialState = {
  loading: false,
  error: null,
  currentUser: null,
  queryData: [],
  queryContext: {
    pathname: "",
    method: "",
  },
};

export const fetchCurrentUser = createAsyncThunk(
  "users/fetchCurrentUser",
  async function (options, { rejectWithValue }) {
    try {
      const session = await Auth.currentSession();
      const response = await API.graphql({
        query: getUser,
        variables: { ID: session.getIdToken() },
      });
      return response.data;
    } catch ({ errors }) {
      let err = errors[0].message;
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async function (userId, { rejectWithValue }) {
    try {
      // const response = await userAPI.fetchOneById(userId);
      // return response.data;
    } catch ({ errors }) {
      let err = errors[0].message;
      return rejectWithValue(err);
    }
  }
);

export const fetchUsersByUsername = createAsyncThunk(
  "users/fetchUsersByUsername",
  async function (username, { rejectWithValue }) {
    try {
      // const response = await userAPI.fetchAllByUsername(username);
      // return response.data;
    } catch ({ errors }) {
      let err = errors[0].message;
      return rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(fetchCurrentUser.pending, function (state) {
      state.loading = true;
      state.currentUser = {};
    });
    builder.addCase(fetchCurrentUser.fulfilled, function (state, action) {
      state.loading = false;
      state.currentUser = action.payload;
    });
    builder.addCase(fetchCurrentUser.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchUserById.pending, function (state) {
      state.loading = true;
      state.queryUsers = [];
    });
    builder.addCase(fetchUserById.fulfilled, function (state, action) {
      state.loading = false;
      state.queryUsers.push(action.payload);
    });
    builder.addCase(fetchUserById.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchUsersByUsername.pending, function (state) {
      state.loading = true;
      state.queryUsers = [];
    });
    builder.addCase(fetchUsersByUsername.fulfilled, function (state, action) {
      state.loading = false;
      state.queryUsers.push(...action.payload);
    });
    builder.addCase(fetchUsersByUsername.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
