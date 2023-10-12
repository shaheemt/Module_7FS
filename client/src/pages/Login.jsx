import {React , useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

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
        navigate('/Contact')
      }
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  }
  return (
    <div>
    <div className="container1">
       <div className="form-box" id="form">
         <h1 id="title">Sign In</h1>
        <form onSubmit={loginUser} action="">
           <div className="input-group">
               <div className="input-field">
               <input type="email" placeholder='enter email...'value={data.email} onChange={(e) => setData({...data, email:e.target.value})} />             
               </div>  
               <div className="input-field">
               <input type="password" placeholder='enter passwourd...'value={data.password} onChange={(e) => setData({...data, password:e.target.value})} />
               </div>
               <Link className='but-field' to='/'><li>Sign Up</li> </Link>
              
           </div>
          
           <button type='submit'>Submit</button>
        </form>
       </div>
      </div>
</div>
  )
}

export default Login





// <div>
// <form onSubmit={loginUser} action="">
//    <label>Email</label>
//    <input type="email" placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email:e.target.value})}/>
//    <label>Password</label>
//    <input type="password" placeholder='enter passwourd...' value={data.password} onChange={(e) => setData({...data, password:e.target.value})}/>
//    <button type='submit'>Submit</button>
// </form>
// </div>