import './App.css'
import Form from '../Form/Form';
import BookCard from '../BookCard/BookCard'

function App() {


  return (

    <div className="App">
      <Form />
      <div className="cards-content">
        <BookCard />
      </div>
    </div>

  )
}

export default App
