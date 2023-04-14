import { createSlice } from "@reduxjs/toolkit";

const articlesListSlice = createSlice({
  name: "articlesList",
  initialState: {
    data: [],
    searchTerm: "",
  },
  reducers: {
    // Payload to be an Article object {id, title, content, author, dateAdded}
    addArticle(state, action) {
      const { id, title, content, author, dateAdded } = action.payload;
      state.data.push({
        id,
        title,
        content,
        author,
        dateAdded,
      });
    },
    deleteArticleById(state, action) {
      return state.data.filter((article) => {
        return article.id !== action.payload;
      });
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addArticle, deleteArticleById, changeSearchTerm } =
  articlesListSlice.actions;
export const articlesListReducer = articlesListSlice.reducer;
