import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";
// import { API, graphqlOperation } from "aws-amplify";

// import { getNFT, listNFTS } from "../../graphql/queries";

const initialState = {
  loading: false,
  error: null,
  userData: [],
  queryData: [],
  queryContext: {
    pathname: "",
    method: "",
  },
};

export const fetchUserNFTs = createAsyncThunk(
  "nfts/fetchUserNFTs",
  async function (options, { rejectWithValue }) {
    const response = {
      data: [],
      context: {
        pathname: "",
        method: "fetchUserNFTs",
      },
    };
    response.context.pathname = options.location.pathname;

    try {
      const user = await Auth.currentAuthenticatedUser();
      // const nfts = await API.graphql(
      //   graphqlOperation(listNFTS, {
      //     filter: { ownerId: { eq: user.attributes.sub } },
      //   })
      // );

      // console.log(nfts);

      // response.data.push(...nfts.data.listNFTS.items);

      return response;
    } catch (err) {
      console.log(err);
      return rejectWithValue({
        error: err.toString(),
        context: response.context,
      });
    }
  }
);

export const fetchNFTById = createAsyncThunk(
  "nfts/fetchNFTById",
  async function (tokenId, options, { rejectWithValue }) {
    const response = {
      data: [],
      context: {
        pathname: "",
        method: "fetchNFTById",
      },
    };
    response.context.pathname = options.location.pathname;

    try {
      // const nft = await API.graphql(getNFT, { id: tokenId });

      // response.data.push(nft);

      return response;
    } catch (err) {
      return rejectWithValue({
        error: err.toString(),
        context: response.context,
      });
    }
  }
);

export const fetchNFTsByUser = createAsyncThunk(
  "nfts/fetchNFTsByUser",
  async function (userId, options, { rejectWithValue }) {
    const response = {
      data: [],
      context: {
        pathname: "",
        method: "fetchNFTsByUser",
      },
    };
    response.context.pathname = options.location.pathname;

    try {
      // const nfts = await API.graphql(listNFTS, {
      //   filter: { ownerId: { eq: userId } },
      // });

      // response.data.push(...nfts);

      return response;
    } catch (err) {
      return rejectWithValue({
        error: err.toString(),
        context: response.context,
      });
    }
  }
);

export const nftSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder.addCase(fetchUserNFTs.pending, function (state) {
      state.loading = true;
      state.userData = [];
      state.queryContext.method = "fetchUserNFTs";
    });
    builder.addCase(fetchUserNFTs.fulfilled, function (state, action) {
      state.loading = false;
      state.userData.push(...action.payload.data);
      state.queryContext.pathname = action.payload.context.pathname;
    });
    builder.addCase(fetchUserNFTs.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload.data;
      state.queryContext.pathname = action.payload.context.pathname;
    });

    builder.addCase(fetchNFTById.pending, function (state) {
      state.loading = true;
      state.queryData = [];
      state.queryContext.method = "fetchNFTById";
    });
    builder.addCase(fetchNFTById.fulfilled, function (state, action) {
      state.loading = false;
      state.queryData.push(action.payload.data);
    });
    builder.addCase(fetchNFTById.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchNFTsByUser.pending, function (state) {
      state.loading = true;
      state.queryData = [];
      state.queryContext.method = "fetchNFTsByUser";
    });
    builder.addCase(fetchNFTsByUser.fulfilled, function (state, action) {
      state.loading = false;
      state.queryData.push(...action.payload.data);
    });
    builder.addCase(fetchNFTsByUser.rejected, function (state, action) {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = nftSlice.actions;

export default nftSlice.reducer;
