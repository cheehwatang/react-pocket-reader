import { createSlice } from "@reduxjs/toolkit";

const articlesFormSlice = createSlice({
  name: "articlesForm",
  initialState: {
    title: "",
    content: "",
    author: "",
    dateAdded: "",
  },
  reducers: {},
});

export const articlesFormReducer = articlesFormSlice.reducer;
