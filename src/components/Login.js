import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      {/* <div className='absolute'>

        add background image 

      </div> */}

      <form className='w-1/2 p-12 bg-black absolute  my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type='text' placeholder='Email address' className='p-2 m-2'></input>
        <input type='password' placeholder='Password' className='p-2 m-2'></input>
        <button className='p-4 m-4'>Sign-In</button>

      </form>
    </div>
  )
}

export default Login