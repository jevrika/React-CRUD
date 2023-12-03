import { useState } from 'react';
import axios from 'axios'
import './Form.css'
const  Form = () => {
  const [formData, setFormData] = useState({
    name:'',
    author:'',
    genre:'',
    year:'',
    createdAt:new Date()
  })

  const handleFormSubmit = () => {

    axios.post('http://localhost:3000/books', formData).then((response) => {
      setFormData(response.data)
    })
  }
  return (  
    <div className="form-wrapper">
      <form className="js-book-form book-form__form" >
        <h1 className="book-form__heading">Add new book!</h1>
        <input type="text" className='book-form__input' name="book-name" placeholder="add book" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
        <input type="text" className='book-form__input' name="author-name" placeholder="add author" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})} />

            <select className="book-genre-select" name="book-genre" id="book-genre" value={formData.genre} onChange={(e) => setFormData({...formData, genre: e.target.value})} > 
                <option value="choose a book genre">choose a book genre</option> 
                <option value="Mystery">Mystery</option>  
                <option value="Fantasy">Fantasy</option> 
                <option value="Romance">Romance</option> 
                <option value="Horror">Horror</option> 
                <option value="Psychology">Psychology</option> 
                <option value="History">History</option> 
            </select>

        <input type="number" min="1900" max="2060" className='book-form__input' name="book-year" placeholder="add publishing year" value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value})}/>
        <button className="js-add__button book-form__button" onClick={handleFormSubmit}>Add book! </button>
      </form>
    </div>

  );
}
 
export default Form ;