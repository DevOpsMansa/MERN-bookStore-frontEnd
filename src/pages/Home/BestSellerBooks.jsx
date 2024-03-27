// import React, { useEffect, useState } from "react";
// import BookCards from "../shared/BookCards";

// const BestSellerBooks = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/all-books")
//       .then(res => res.jason())
//       .then(data => setBooks(data.slice(0, 8)))
//   }, [])
//   return (
//     <div>
//       <BookCards books={books} headLine="best Seller Books" />
//     </div>
//   );
// };

// export default BestSellerBooks;