import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";

const EditBooks = () => {
  // Extracting book ID from URL parameters
  const { id } = useParams();

  // Extracting book data from loader data
  const { bookTitle, authorName, imageURL, bookDescription, bookPDFURL } =
    useLoaderData();

  // Array of book categories
  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];

  // State to manage selected book category
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  // Function to handle change in selected book category
  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // Function to handle book update
  const updateBookObj = (event) => {
    event.preventDefault();
    const form = event.target;

    // Extracting data from the form fields
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    // Constructing book object with updated data
    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    // Updating the book object
    fetch(`https://mern-bookstore-backend-0c5b.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert("Book is updated successfully!!!");
        // form.reset();
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-purple-800">
        Update Book Details!
      </h2>
      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={updateBookObj}
      >
        {/* First row */}
        <div className="flex gap-8">
          {/* Book name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              placeholder="Book Name"
              required
              type="text"
              name="bookTitle"
              className="w-full"
              defaultValue={bookTitle}
            />
          </div>

          {/* Author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author Name"
              required
              type="text"
              name="authorName"
              className="w-full"
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex gap-8">
          {/* Book URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Image URL"
              required
              type="text"
              name="imageURL"
              className="w-full"
              defaultValue={imageURL}
            />
          </div>

          {/* Book category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {/* Mapping through book categories */}
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Full width div for book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Book Description"
            required
            type="text"
            name="bookDescription"
            className="w-full"
            rows={4}
            defaultValue={bookDescription}
          />
        </div>

        {/* Book PDF URL */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF Link" />
          </div>
          <TextInput
            id="bookPDFURL"
            placeholder="Paste Book PDF URL here"
            required
            type="text"
            name="bookPDFURL"
            className="w-full"
            defaultValue={bookPDFURL}
          />
        </div>

        {/* Submit button */}
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
