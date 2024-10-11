import SearchHeader from '../public/SearchHeader/SearchHeader';
import searchImages from '../public/SearchHeader/ApiRequest'
import './App.css'

function App() {

  
  const handleSubmit = (event) => {
    console.log(event);
    searchImages(event)
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
