import { useEffect, useState } from 'react';
import BookCreatedAt from '../BookCreatedAt/BookCreatedAt';
import styles from './BookCard.module.css'
import axios from 'axios'
import { Book } from '../types'
import BookCardImage from '../BookCardImage/BookCardImage';

type CardProps = {
  handleEdit: (arg:Book) => void;
}

const Card = ({handleEdit }:CardProps) => {
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
      handleEdit(response.data)
    })
  }

  return (
    <>
      {
        bookData && bookData.map((book) => (
          <div key={book.id} className={styles.wrapper}>
            <div className={styles.book}>

              <div className={styles.genreImageWrapper}>
                <BookCardImage genre={book.genre}/>
              </div>

              <h1 className={styles.bookHeading}>{book.name}</h1>
              <h2 className={styles.authorHeading}> {book.author}</h2>
              <h3 className={styles.genreHeading}>{book.genre}  </h3>
              <h4 className={styles.yearHeading}>The year of publishing : {book.year}</h4>

              <button className={styles.editButton}onClick={() => handleEditButton(book.id)}> Edit </button>
              <button className={styles.deleteButton} onClick={() => handleDeleteBook(book.id)}> Delete </button>

              <p className={styles.creatingDate}>{BookCreatedAt(book.createdAt)} </p>
            </div>
          </div>
        ))}
    </>
  );
}
export default Card;