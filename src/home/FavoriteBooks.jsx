import React, { useEffect, useState} from 'react'

const FavoriteBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/all-books").then(res, res.jason()).then(data => console.log(data))

    }, {})
  return (
    <div>
        <BookCards books={books} headLine="best Seller Books"/>
    </div>
  )
}

export default FavoriteBooks