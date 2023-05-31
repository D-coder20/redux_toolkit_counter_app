import { createSlice } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require("uuid");
const initialBooks = {
  books: [
    { id: uuidv4(), title: "Harry Potter", author: "J.K.Rowling" },
    { id: uuidv4(), title: "Apur Sansar", author: "Satyajit Ray" },
    {
      id: 3,
      title: "Taranath Tantrik",
      author: "Bibhutibhushan Bandyopadhyay",
    },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    updateBooks: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExists = state.books.filter((book) => book.id === id);
      if (isBookExists) {
        isBookExists[0].title = title;
        isBookExists[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id != id);
    },
  },
});

export const { showBooks, addBooks, updateBooks, deleteBook } =
  bookSlice.actions;
export default bookSlice.reducer;
