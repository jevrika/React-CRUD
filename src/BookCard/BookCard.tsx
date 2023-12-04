import { useEffect, useState } from 'react';
import BookCreatedAt from '../BookCreatedAt/BookCreatedAt';
import './bookCard.css'
import axios from 'axios'
import { Book } from '../types'
import BookCardImage from '../BookCardImage/BookCardImage';


const Card = (props: { handleEdit: (arg0: Book) => void; }) => {
  const [bookData, setBookData] = useState<Book[]>([]);

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = () => {
    axios.get<Book[]>('http://localhost:3000/books').then((response) => {
      setBookData(response.data.reverse())
    })
  }

  const handleDeleteBook = (bookId: number) => {
    axios.delete(`http://localhost:3000/books/${bookId}`).then(() => {
      getBooks()
    })
  }

  const handleEditButton = (bookId: number) => {
    axios.get(`http://localhost:3000/books/${bookId}`).then((response) => {
      props.handleEdit(response.data)
    })
  }

  return (
    <>
      {
        bookData && bookData.map((book) => (
          <div key={book.id} className="js-book-wrapper book-wrapper">
            <div className="book"   >

              <div className="genre-image-wrapper">
                <img className="genre-image" src={BookCardImage(book.genre)} alt="Genre Image" />
              </div>

              <h1 className="book__heading">{book.name}</h1>
              <h2 className="book-author__heading"> {book.author}</h2>
              <h3 className="book-genres__heading">{book.genre}  </h3>
              <h4 className="book-year__heading">The year of publishing : {book.year}</h4>

              <button className='js-edit__button book-edit__button' onClick={() => handleEditButton(book.id)}> Edit </button>
              <button className='js-delete__button book-delete__button' onClick={() => handleDeleteBook(book.id)}> Delete </button>

              <p className="creating-date">{BookCreatedAt(book.createdAt)} </p>
            </div>
          </div>
        ))}
    </>
  );
}
export default Card;