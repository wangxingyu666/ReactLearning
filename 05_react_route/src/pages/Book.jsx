import React from "react";
import { useParams } from "react-router-dom";

const Book = ({ user }) => {
  const { bookId } = useParams();
  if (!user) {
    return <div>请登录</div>;
  }
  return (
    <div>
      <h2>Book Page</h2>
      <h3>bookId:{bookId}</h3>
    </div>
  );
};

export default Book;
