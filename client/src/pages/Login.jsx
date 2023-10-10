import {React , useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [data , setData] = useState({
      email:'',
      password:'',
  })
  
  const loginUser = async (e) => {
    e.preventDefault()
    const {email,password} = data
    try {
      const {data} = await axios.post('/login',{
        email,
        password,
      }) 
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }
  return (
    <div>
         <form onSubmit={loginUser} action="">
            <label>Email</label>
            <input type="email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
            <label>Password</label>
            <input type="password" placeholder='enter passwourd...' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login