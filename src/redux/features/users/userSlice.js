import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./userCrud";

export const fetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    async (payload, { rejectWithValue }) => {
      try {
        const res = await getAllUsers();
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  const userSlice = createSlice({
    name: "users",
    initialState: {
      users: [],
      isLoading: null,
      msg: null,
      error: null,
    },
    reducers: {},
    extraReducers: {
      [fetchAllUsers.pending]: (state, action) => {
        state.isLoading = true;
      },
      [fetchAllUsers.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      },
      [fetchAllUsers.rejected]: (state, error) => {
        state.isLoading = false;
      },
    },
  });
  export default userSlice.reducer;
