import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import apiClient from "../api/rest/client";
import type { RootState } from "./index";
import type { Word } from "../api/model/responseInterfaces";

interface WordsState {
  words: Word[];
  loading: boolean;
  error: string | null;
}

const initialState: WordsState = {
  words: [],
  loading: false,
  error: null,
};

export const fetchWords = createAsyncThunk<
  Word[],
  void,
  { rejectValue: string }
>("words/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await apiClient.get<any>("/GetAllWords");
    let data = response.data;

    if (!Array.isArray(data)) {
      for (const key of Object.keys(data)) {
        if (Array.isArray((data as any)[key])) {
          data = (data as any)[key];
          break;
        }
      }
    }

    if (!Array.isArray(data)) {
      throw new Error("Unexpected response shape");
    }

    const normalized: Word[] = data.map((item: any) => ({
      id: item.id ?? item.Id ?? item._id,
      national: item.national ?? item.National,
      foreign: item.foreign ?? item.Foreign,
    }));

    return normalized;
  } catch (err: any) {
    const msg =
      err.response?.data?.errorMessage ||
      err.response?.data?.message ||
      err.message ||
      "Failed to load words.";
    return rejectWithValue(msg);
  }
});

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWords.fulfilled, (state, action: PayloadAction<Word[]>) => {
        state.loading = false;
        state.words = action.payload;
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Could not load words";
      });
  },
});

export const selectWords = (state: RootState) => state.words.words;
export const selectWordsLoading = (state: RootState) => state.words.loading;
export const selectWordsError = (state: RootState) => state.words.error;

export default wordsSlice.reducer;
