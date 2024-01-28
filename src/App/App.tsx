import styles from './App.module.css'
import Form from '../components/Form/Form';
import BookCard from '../components/BookCard/BookCard'
import { useState } from 'react';
import { Book } from '../types'

const App = () => {
  const [editMode, setEditMode] = useState(false);

  const [editFormData, setEditFormData] = useState<Book>({
    id: 0,
    name: '',
    author: '',
    genre: '',
    year: '',
    createdAt: String(new Date()),
  });

  const handleEdit = (bookData: Book) => {
    setEditFormData(bookData);
    setEditMode(true);
  };


  return (
    <div className={styles.wrapper}>
      <Form editFormData={editFormData} editMode={editMode} />
      <div className={styles.cardsContent}>
        <BookCard handleEdit={handleEdit} />
      </div>
    </div>

  )
}

export default App
