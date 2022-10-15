import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";



export const rootReducer = combineReducers({
  users: userReducer,
});
