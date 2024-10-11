import SearchHeader from '../public/SearchHeader/SearchHeader';
import './App.css'

function App() {

  const handleSubmit = (event) => {
    console.log(event);
  }

  return (
    <>
      <div className='App'>
        <SearchHeader search={handleSubmit}/>
      </div>
    </>
  )
}

export default App
