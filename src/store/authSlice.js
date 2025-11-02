import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    userId: localStorage.getItem("userId") || null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      if (action.payload) {
        localStorage.setItem("accessToken", action.payload);
      } else {
        localStorage.removeItem("accessToken");
      }
    },

    setUserId: (state, action) => {
      state.userId = action.payload;
      if (action.payload) {
        localStorage.setItem("userId", action.payload);
      } else {
        localStorage.removeItem("userId");
      }
    },

    logout: (state) => {
      state.accessToken = null;
      state.userId = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      console.log("LogOut")
    },
  },
});

export const { setAccessToken, setUserId, logout } = authSlice.actions;
export default authSlice.reducer;
