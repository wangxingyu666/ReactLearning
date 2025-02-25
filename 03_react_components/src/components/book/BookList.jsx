import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, deleteBook, editBook, setSelectedBook }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          deleteBook={deleteBook}
          editBook={editBook}
          setSelectedBook={setSelectedBook}
        />
      ))}
    </div>
  );
};

export default BookList;
