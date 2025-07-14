import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchTesting = createAsyncThunk("testing", async () => {
  const response = await axios.get("");
  return response.data;
});

const inistialState = {
  value: null,
};

const TestingSlice = createSlice({
  name: "test",
  initialState: inistialState,
  reducers: {
    test: (state, action) => {
      console.log(action.payload);
      return state.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTesting.pending, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { test } = TestingSlice.actions;
export default TestingSlice.reducer;
