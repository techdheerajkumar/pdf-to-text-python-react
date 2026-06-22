import Header from './components/Header/header'
import getUsersAPI from './services/userService'
import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [message, setMessage] = useState()

  useEffect(()=>{
    const data = getUsersAPI()
    data.then(item => setMessage(item.message))
  }, [])
  return (
    <>
      <Header />
      <h1>{message}</h1>
    </>
  )
}

export default App
