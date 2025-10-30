import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Java Programming", author: "James Gosling", year: 1995 },
    { id: 2, title: "Effective C++", author: "Scott Meyers", year: 2005 },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "", year: "" });
  const [search, setSearch] = useState("");

  const addBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author || !newBook.year) return;
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    setBooks([...books, { id, ...newBook }]);
    setNewBook({ title: "", author: "", year: "" });
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ margin: "30px auto", width: "80%", textAlign: "center" }}>
      <h1>📚 Library Management System</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "60%", marginBottom: "20px" }}
      />

      <form onSubmit={addBook}>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          style={{ padding: "8px", margin: "5px" }}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          style={{ padding: "8px", margin: "5px" }}
        />
        <input
          type="number"
          placeholder="Year"
          value={newBook.year}
          onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
          style={{ padding: "8px", margin: "5px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            margin: "5px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add Book
        </button>
      </form>

      <table
        border="1"
        style={{ margin: "20px auto", width: "80%", borderCollapse: "collapse" }}
      >
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>
                  <button
                    onClick={() => deleteBook(book.id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No books found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
