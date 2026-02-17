import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import Cookies from "js-cookie";

// Define allowed roles
export type UserRole =
  | "BUYER"
  | "GARAGE"
  | "DEALERSHIP"
  | "CAR_OWNER"
  | "SUPERADMIN";

type AuthState = {
  role: UserRole | null;
  token: string | null;
};

const initialState: AuthState = {
  role: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ role: UserRole; accessToken: string }>
    ) => {
      const { role, accessToken } = action.payload;

      state.role = role;
      state.token = accessToken;

      // Save in cookies for persistence
      Cookies.set("accessToken", accessToken, );
    },

    logout: (state) => {
      state.role = null;
      state.token = null;

      // Remove from cookies
      Cookies.remove("accessToken");
      Cookies.remove("role");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

// Selectors
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentRole = (state: RootState) => state.auth.role;
