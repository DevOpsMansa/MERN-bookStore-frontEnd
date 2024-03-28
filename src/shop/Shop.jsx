import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  // fetching data from server
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-16 z-40">
        All Books are Available Here
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {books.map(
          (
            book,
            index // Adding 'index' parameter to access the index of each element
          ) => (
            <Card key={index}>
              {" "}
              {/* Assigning 'index' as the key */}
              <img src={book.imageURL} alt="" className="h-96" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order....
              </p>
              <button className="px-4 py-2 bg-cyan-500 text-white rounded orange-500 text-white font-semibold px-5 py-2 rounded hover:bg-orange-500 transition-all duration-300">
                Buy Now
              </button>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default Shop;
