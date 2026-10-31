import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='loginsignup'>
        <div className='loginsignup-container'>
                    <h1>Login</h1>
                    <div className='loginsignup-fields'>
                        <input type="email" placeholder='Email Address' />
                        <input type="password" placeholder='Password' />
                    </div>
                    <button>Continue</button>
                    <p className='loginsignup-login' >Don't have an account <span><Link to='/signup' style={{color:"red", textDecoration:"none"}} >Sign up</Link></span> </p>
                </div>
        
    </div>
  )
}

export default Login
