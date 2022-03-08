import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

const initialState = {
  loading: false,
  error: null,
  currentUser: null,
};

export const fetchCurrentUser = createAsyncThunk(
  "users/fetchCurrentUser",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      dispatch(
        setUser({
          username: currentUser.username,
          email: currentUser.attributes.email,
          sub: currentUser.attributes.sub,
        })
      );
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: function (state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: function (builder) {
    builder.addCase(fetchCurrentUser.pending, function (state) {
      state.loading = true;
    });
    builder.addCase(fetchCurrentUser.fulfilled, function (state, action) {
      state.loading = false;
    });
    builder.addCase(fetchCurrentUser.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
