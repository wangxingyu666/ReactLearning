import React from "react";

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      <h2>{book.title} - 详情</h2>
      <img src={book.imageUrl} alt={book.title} className="book-image" />
      <p>作者：{book.author}</p>
      <p>出版年份：{book.year}</p>
      <p>类别：{book.category}</p>
    </div>
  );
};

export default BookDetail;
