import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import wordsReducer from "./wordsSlice";
import apiClient from "../api/client";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    words: wordsReducer,
  },
});

apiClient.interceptors.request.use((config) => {
  const state = store.getState();
  const token = state.auth.token;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
