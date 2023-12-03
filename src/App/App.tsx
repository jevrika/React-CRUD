import './App.css'
import Form from '../Form/Form';
import BookCard from '../BookCard/BookCard'
import { useState } from 'react';
import { Book } from '../types'

function App() {
  // atbildīgs par editmode
  const [editMode, setEditMode] = useState(false);
  // atbildīgs par editMode datiem
  const [editFormData, setEditFormData] = useState<Book>({
    id:Number(''),
    name: '',
    author: '',
    genre: '',
    year: '',
    createdAt: String(new Date()),
  });
  // funkcija, ko izmantos iekš bookCard, lai iestatītu editmode formai
  // tipu piedāvāja vscode :)
  const handleEdit = (bookData: Book) => {
    setEditFormData(bookData);
    setEditMode(true);
  };


  return (

    <div className="App">
      <Form editData={editFormData} editMode={editMode} />
      <div className="cards-content">
        <BookCard handleEdit={handleEdit} />
      </div>
    </div>

  )
}

export default App
