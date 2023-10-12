import {React,useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
    
    const navigate = useNavigate();

    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
    })
    const registerUser = async (e) => {
        e.preventDefault()
        const {name,email,password} = data

        try {
            const {data} = await axios.post('/register',{
                name,email,password
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success("Login Successful. Welcome!")
                navigate('/login')
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
             <h1 id="title">Sign Up</h1>
            <form  onSubmit={registerUser} action="">
               <div className="input-group">
                   <div className="input-field" id="nameField">
                   <input type="text" placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name:e.target.value})} /> 
                   </div> <small id="err" className="message-field"></small>
                  
                   <div className="input-field">
                   <input type="email" placeholder='enter email...'value={data.email} onChange={(e) => setData({...data, email:e.target.value})} />             
                   </div>  
                   <div className="input-field">
                   <input type="password" placeholder='enter passwourd...'value={data.password} onChange={(e) => setData({...data, password:e.target.value})} />
                   </div>
                   <Link className='but-field' to='/login'><li>Login</li> </Link>
               </div>
               <button type='submit'>Submit</button>
            </form>
           </div>
          </div>
    </div>
        







  )
}

export default Register



    // <div>
    //     <form onSubmit={registerUser} action="">
    //         <label>Name</label>
    //         <input type="text" placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name:e.target.value})} /> <br /><br />
    //         <label>Email</label>
    //         <input type="email" placeholder='enter email...'value={data.email} onChange={(e) => setData({...data, email:e.target.value})} />
    //         <label>Password</label><br /><br />
    //         <input type="password" placeholder='enter passwourd...'value={data.password} onChange={(e) => setData({...data, password:e.target.value})} />
    //         <button type='submit'>Submit</button>
    //     </form>
    // </div>