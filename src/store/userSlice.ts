import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { User } from "@/types";


interface UserState {
  user: User | null;

  token: string | null;

  isAuthenticated: boolean;

  loading: boolean;
}


const initialState: UserState = {
  user: null,

  token: null,

  isAuthenticated: false,

  loading: false
};


const userSlice = createSlice({

  name: "user",

  initialState,

  reducers: {


    loginUser(
      state,
      action: PayloadAction<{
        user: User;
        token: string;
      }>
    ) {

      state.user =
        action.payload.user;

      state.token =
        action.payload.token;

      state.isAuthenticated = true;

    },


    logoutUser(
      state
    ) {

      state.user = null;

      state.token = null;

      state.isAuthenticated = false;

    },


    updateUser(
      state,
      action: PayloadAction<User>
    ) {

      state.user =
        action.payload;

    },


    setLoading(
      state,
      action: PayloadAction<boolean>
    ) {

      state.loading =
        action.payload;

    }

  }

});


export const {
  loginUser,
  logoutUser,
  updateUser,
  setLoading
} = userSlice.actions;


export default userSlice.reducer;
