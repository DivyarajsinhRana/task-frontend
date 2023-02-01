import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registeredUsersList, registerUser } from "./registerCrud";

export const creatUser = createAsyncThunk(
    "register/creatUser",
    async (payload, { rejectWithValue }) => {
        console.log('payload',payload)
      try {
        const res = await registerUser(payload);
        // console.log('user create',res);
        console.log('responsr',res);

        return res.data;
      } catch (error) {
        console.log('error',error)

        return rejectWithValue(error.message);
      }
    }
  );
export const getRegisterUsersList = createAsyncThunk(
    "register/getRegisterUsersList",
    async (payload, { rejectWithValue }) => {
        // console.log('payload',payload)
      try {
        const res = await registeredUsersList();
        return res.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  const registerSlice = createSlice({
    name: "register",
    initialState: {
      user: {},
      allUsers:[],
      isLoading: null,
      msg: null,
      error: null,
    },
    reducers: {},
    extraReducers: {
      [creatUser.pending]: (state, action) => {
        state.isLoading = true;
        state.error = null
      },
      [creatUser.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null
      },
      [creatUser.rejected]: (state, error) => {
        state.isLoading = false;
        // console.log('error',error)
        state.error = error
      },
      // all users
      [getRegisterUsersList.pending]: (state, action) => {
        state.isLoading = true;
      },
      [getRegisterUsersList.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.allUsers = action.payload;
      },
      [getRegisterUsersList.rejected]: (state, error) => {
        state.isLoading = false;
      },
    },
  });
  export default registerSlice.reducer;
