import './App.css'
import Form from '../Form/Form';
import BookCard from '../BookCard/BookCard'
import { useState } from 'react';
import { Book } from '../types'

function App() {
  // atbildīgs par editmode
  const [editMode, setEditMode] = useState(false);

  // atbildīgs par editMode datiem (editmode režīmā)
  const [editFormData, setEditFormData] = useState<Book>({
    id: 0,
    name: '',
    author: '',
    genre: '',
    year: '',
    createdAt: String(new Date()),
  });

  // funkcija, ko izmantos iekš bookCard, lai iestatītu editmode formai true un atbilstošos datus, kad tiek nospiesta Edit poga BookCard komponentē
  const handleEdit = (bookData: Book) => {
    setEditFormData(bookData);
    setEditMode(true);
  };


  return (
    <div className="App">
      {/* Padod formai datus */}
      <Form formData={editFormData} editMode={editMode} />
      <div className="cards-content">
        {/* Paņem grāmatus datus uz kuras tika uzspiests edit */}
        <BookCard handleEdit={handleEdit} />
      </div>
    </div>

  )
}

export default App
