import { configureStore } from "@reduxjs/toolkit";
import {
  changeName,
  changeContent,
  changeAuthor,
  articlesFormReducer,
} from "./slices/articlesFormSlice";
import {
  addArticle,
  deleteArticleById,
  changeSearchTerm,
  articlesListReducer,
} from "./slices/articlesListSlice";

const store = configureStore({
  reducer: {
    articlesForm: articlesFormReducer,
    articlesList: articlesListReducer,
  },
});

export {
  store,
  changeName,
  changeContent,
  changeAuthor,
  addArticle,
  deleteArticleById,
  changeSearchTerm,
};
