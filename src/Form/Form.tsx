/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios'
import './Form.css'
import { Book } from '../types';

const Form = (props: { editMode: boolean; editData: Book; }) => {
  const [formData, setFormData] = useState<Book>({
    id:Number(''),
    name: '',
    author: '',
    genre: '',
    year: '',
    createdAt: String(new Date()),
  })

  // Samaina formā pogas nosaukumu un klasi atkarībā no editMode vērtības
  const formButtonText = props.editMode ? "Update book!" : "Add book!"
  const formButtonClassName = props.editMode ? "js-edit__button book-form__button" : "js-add__button book-form__button"
 
  // Nostrādā, kad props.editData mainās
  useEffect(() => {
    setFormData({
      ...formData,
      ...props.editData,  
    });
  }, [props.editData]);

  const handleFormSubmit = () => {
    if (props.editMode) {
      axios.put(`http://localhost:3000/books/${props.editData.id}`, formData).then((response) => {
        setFormData(response.data)
      })
    } else {
      axios.post('http://localhost:3000/books', formData).then((response) => {
        setFormData(response.data)
      })
    }
  }
  
  return (
    <div className="form-wrapper">
      <form className="js-book-form book-form__form" >
        <h1 className="book-form__heading">Add new book!</h1>
        <input type="text" className='book-form__input' name="book-name" placeholder="add book" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required/>
        <input type="text" className='book-form__input' name="author-name" placeholder="add author" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} required/>

        <select required className="book-genre-select" name="book-genre" id="book-genre" value={formData.genre} onChange={(e) => setFormData({ ...formData, genre: e.target.value })} >
          <option value="choose a book genre">choose a book genre</option>
          <option value="Mystery">Mystery</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
          <option value="Psychology">Psychology</option>
          <option value="History">History</option>
        </select>

        <input type="number" min="1900" max="2060" className='book-form__input' name="book-year" placeholder="add publishing year" value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} required/>
        <button className={formButtonClassName} onClick={handleFormSubmit}>{formButtonText} </button>
      </form>
    </div>

  );
}

export default Form;