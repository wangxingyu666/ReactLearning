import { useState } from "react";
import BookInput from "./BookInput";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import "./book.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (id, updatedBook) => {
    setBooks(
      books.map((book) => (book.id === id ? { ...book, ...updatedBook } : book))
    );
  };

  return (
    <div className="app">
      <h1>图书管理系统</h1>
      <BookInput addBook={addBook} />
      <BookList
        books={books}
        deleteBook={deleteBook}
        editBook={editBook}
        setSelectedBook={setSelectedBook}
      />
      {selectedBook && <BookDetail book={selectedBook} />}
    </div>
  );
};

export default App;
