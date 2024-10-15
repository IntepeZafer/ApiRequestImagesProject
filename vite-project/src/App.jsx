import './App.css'
import searchImages from '../Public/ApiServices/apiServices'
import SearchHeader from '../Public/SearchHeader/SearchHeader'
function App() {
  const handleSubmit = (event) => {
    searchImages(event);
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
