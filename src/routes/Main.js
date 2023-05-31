import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";
import Navbar from "../layouts/Navbar";
import BookView from "../features/books/BookView";
import AddBook from "../features/books/AddBook";
import EditBook from "../features/books/EditBook";

const Main = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/showbooks" element={<BookView />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/editbook" element={<EditBook />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Main;
