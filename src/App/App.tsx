import './App.css'
import Form from '../Form/Form';
import BookCard from '../BookCard/BookCard'
import { useState } from 'react';

function App() {
  // atbildīgs par editmode
  const [editMode, setEditMode] = useState(false);
  // atbildīgs par editMode datiem
  const [editFormData, setEditFormData] = useState(null);
  // funkcija, ko izmantos iekš bookCard, lai iestatītu editmode formai
  // tipu piedāvāja vscode :)
  const handleEdit = (bookData) => {
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
