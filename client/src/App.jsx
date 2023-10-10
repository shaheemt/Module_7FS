import './App.css'
import {Routes ,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
// import UserContextProvider from '../context/userContext'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true

function App() {
  return (
    // <UserContextProvider>
    <>
    <Navbar />
    <Toaster position='button-right' toastOptions={{duration:2000}} />
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
    // </UserContextProvider>
  )
}

export default App
