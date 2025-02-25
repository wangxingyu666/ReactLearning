import React, { useState } from "react";

const BookItem = ({ book, deleteBook, editBook, setSelectedBook }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(book.title);
  const [newAuthor, setNewAuthor] = useState(book.author);
  const [newYear, setNewYear] = useState(book.year);
  const [newImageUrl, setNewImageUrl] = useState(book.imageUrl);
  const [newCategory, setNewCategory] = useState(book.category);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editBook(book.id, {
      title: newTitle,
      author: newAuthor,
      year: newYear,
      imageUrl: newImageUrl,
      category: newCategory,
    });
    setIsEditing(false);
  };

  return (
    <div className="book-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <input
            type="number"
            value={newYear}
            onChange={(e) => setNewYear(e.target.value)}
          />
          <input
            type="text"
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
          />
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button onClick={handleSave}>保存</button>
        </>
      ) : (
        <>
          <img src={book.imageUrl} alt={book.title} className="book-image" />
          <h3>{book.title}</h3>
          <p>作者：{book.author}</p>
          <p>出版年份：{book.year}</p>
          <p>类别：{book.category}</p>
          <button onClick={() => setSelectedBook(book)}>查看详情</button>
          <button onClick={() => deleteBook(book.id)}>删除</button>
          <button onClick={handleEdit}>编辑</button>
        </>
      )}
    </div>
  );
};

export default BookItem;
