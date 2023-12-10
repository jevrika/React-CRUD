import { useEffect, useState } from 'react';
import axios from 'axios'
import styles from './Form.module.css'
import { Book } from '../types';

const Form = (props: { editMode: boolean; formData: Book; }) => {
  const [formData, setFormData] = useState<Book>({ ...props.formData })

  // Samaina formā pogas nosaukumu un klasi atkarībā no editMode vērtības
  const formButtonText = props.editMode ? "Update book!" : "Add book!"
  const formButtonClassName = props.editMode ? `${styles.formEditButton}` : `${styles.formAddButton}`;

  // Nostrādā, kad props.formData mainās
  useEffect(() => {
    setFormData({
      ...props.formData,
    });
  }, [props.formData]);

  const handleFormSubmit = () => {
    if (props.editMode) {
      axios.put(`http://localhost:3000/books/${props.formData.id}`, formData)
    } else {
      axios.post('http://localhost:3000/book', formData)
    }
  }

  return (
    <div className={styles.wprapper}>
      <form className={styles.bookForm} >
        <h1 className={styles.formHeading}>Add new book!</h1>
        <input type="text" className={styles.formInput} name="book-name" placeholder="add book" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input type="text" className={styles.formInput} name="author-name" placeholder="add author" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} required />

        <select required className={styles.genreSelect} name="book-genre" id="book-genre" value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })} >
          <option value="choose a book genre">choose a book genre</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
          <option value="Psychology">Psychology</option>
          <option value="History">History</option>
        </select>

        <input type="number" min="1900" max="2060" className={styles.formInput} name="book-year" placeholder="add publishing year" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} required />
        <button className={formButtonClassName} onClick={handleFormSubmit}>{formButtonText} </button>
      </form>
    </div>

  );
}

export default Form;