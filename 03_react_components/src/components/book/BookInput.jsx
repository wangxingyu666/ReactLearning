import React, { useState } from "react";

const BookInput = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (title && author && year && imageUrl && category) {
      addBook({
        id: Date.now(),
        title,
        author,
        year,
        imageUrl,
        category,
      });
      setTitle("");
      setAuthor("");
      setYear("");
      setImageUrl("");
      setCategory("");
    }
  };

  return (
    <div className="book-input">
      <input
        type="text"
        placeholder="书名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="作者"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="number"
        placeholder="出版年份"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="图片 URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="类别"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleSubmit}>添加图书</button>
    </div>
  );
};

export default BookInput;
