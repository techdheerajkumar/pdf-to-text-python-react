import Header from './components/Header/header'
import UserAPI from './services/userService'
import { useEffect, useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
function App() {
  const [message, setMessage] = useState()

  useEffect( ()=>{
    const api =  UserAPI.getUsersAPI()
    api.then(data => setMessage(data.message)).then(console.log(message))
  }, [])
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  )
}

export default App
