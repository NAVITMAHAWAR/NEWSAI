/* eslint-disable no-unused-vars */
import { setCookie, removeCookie } from "../../utils/utils";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";
import { getCookie } from "../../utils/utils";

const initialState = {
  loading: false,
  authenticated: getCookie("isAuthenticated") || false,
  name: getCookie("name") || null,
  id: getCookie("id") || null,
  preferences: [],
};

export const SignUp = createAsyncThunk(
  "/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/Register`,
        data
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const Logine = createAsyncThunk(
  "/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/Login`,
        data,
        { withCredentials: true }
      );

      const verifyres = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/verify`,
        { withCredentials: true }
      );
      return { ...res.data, ...verifyres.data };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    signOut: function (state) {
      state.authenticated = false;
      state.id = null;
      state.name = null;

      removeCookie("isAuthenticated");
      removeCookie("name");
      removeCookie("id");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(SignUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.message);
        toast.success(action.payload.message);
      })
      .addCase(SignUp.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        toast.error(action.payload.response.data.message);
      })
      .addCase(Logine.pending, (state) => {
        state.loading = true;
      })
      .addCase(Logine.fulfilled, (state, action) => {
        state.loading = false;
        state.authenticated = action.payload.authenticated;
        state.name = action.payload.name;
        state.id = action.payload.id;
        state.preferences = action.payload.preferences;

        setCookie("isAuthenticated", action.payload.authenticated);
        setCookie("name", action.payload.name);
        setCookie("id", action.payload.id);
        console.log(action.payload);
        toast.success(action.payload.message);
      })
      .addCase(Logine.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
export const { signOut } = authSlice.actions;
