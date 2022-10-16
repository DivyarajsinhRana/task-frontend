import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import registerReducer from "./features/resgister/registerSlice";



export const rootReducer = combineReducers({
  users: userReducer,
  register:registerReducer
});
