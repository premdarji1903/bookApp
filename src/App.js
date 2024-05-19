import './App.css';
import { useEffect, useState } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import axios from 'axios'
function App() {
  const [books, setBooks] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`https://nestjs-server-ord0.onrender.com/book/all`)
    setBooks(response.data)
  }
  useEffect(() => {
    fetchData();
  }, [])
  const createBook = async (title) => {
    const response = await axios.post(`https://nestjs-server-ord0.onrender.com/book/create`, {
      title
    })
    const updatedBooks = [
      ...books,
      response.data
    ]
    setBooks(updatedBooks);
  }

  const deleteBookById = async (id) => {
    if (window.confirm("Are you sure you want to delete this book title ..?")) {
      console.log(`hello`);
      await axios.delete(`https://nestjs-server-ord0.onrender.com/book/delete/${id}`)
      const filteredBooks = books.filter((book) => book._id !== id)
      setBooks(filteredBooks);
    }

  }
  const editBookById = async (id, newTitle) => {
    const response = await axios.patch(`https://nestjs-server-ord0.onrender.com/book/update/${id}`, {
      title: newTitle
    })
    const newBooks = books.map((book) => {
      if (book._id === id) {
        return { ...book, ...response.data }
      }
      return book
    })
    setBooks(newBooks)
  }

  return (
    <div className="App">
      <BookList booksData={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
