import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { loginUser } from "../api/rest/client";
import type { RootState } from "./index";
import type { LoginForm } from "../api/model/payloadInterfaces";

interface AuthState {
  token: string | null;
  username: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  username: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk<
  { token: string; username: string },
  LoginForm,
  { rejectValue: string }
>("auth/login", async (data, { rejectWithValue }) => {
  try {
    const { data: res } = await loginUser(data);
    return { token: res.token, username: data.username };
  } catch (err: any) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ token: string; username: string }>) => {
          state.loading = false;
          state.token = action.payload.token;
          state.username = action.payload.username;
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;

export const selectUsername = (state: RootState) => state.auth.username;

export const selectToken = (state: RootState) => state.auth.token;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
