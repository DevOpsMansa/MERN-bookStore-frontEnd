import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-bookstore-backend-0c5b.onrender.com/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(2, 9)));
    // .catch(error => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <BookCards books={books} headLine="Other Books" />
    </div>
  );
};

export default OtherBooks;
