import './App.css'
import { useState } from 'react'
import ImageList from '../Public/ImageList/ImageList'
import searchImages from '../Public/ApiServices/apiServices'
import SearchHeader from '../Public/SearchHeader/SearchHeader'

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (event) => {
    const result = await searchImages(event);
    setImages(result)
  }
  return (
    <>
      <div className='App'>
        <SearchHeader search={handleSubmit}/>
        <ImageList imagesPlaceholder={images}/>
      </div>
    </>
  )
}
export default App
