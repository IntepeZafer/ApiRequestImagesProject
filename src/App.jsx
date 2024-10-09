import SearchHeader from './SearchHeaderCompanent/SearchHeader'
import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchHeader />
    </>
  )
}

export default App
