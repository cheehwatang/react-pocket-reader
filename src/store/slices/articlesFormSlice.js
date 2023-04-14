import { createSlice } from "@reduxjs/toolkit";

const articlesFormSlice = createSlice({
  name: "articlesForm",
  initialState: {
    title: "",
    content: "",
    author: "",
    dateAdded: "",
  },
  reducers: {
    changeName(state, action) {
      state.title = action.payload;
    },
    changeContent(state, action) {
      state.content = action.payload;
    },
    changeAuthor(state, action) {
      state.author = action.payload;
    },
  },
});

export const { changeName, changeContent, changeAuthor } =
  articlesFormSlice.actions;
export const articlesFormReducer = articlesFormSlice.reducer;
