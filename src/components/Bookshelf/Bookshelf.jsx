import { useState } from "react";
export default function Bookshelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const [newBook, setNewBook] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewBook({ ...newBook, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({});
  }
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book) => (
          <div className="bookCard" key={book.title}>
            <h4>{book.title}</h4>
            <div>{book.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
