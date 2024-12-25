import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const  [issignInForm,setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!issignInForm);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>

        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>

      </div>

      <form className='w-3/12 p-12 bg-black absolute  my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{issignInForm ? "Sign In": "Sign Up"}</h1>
        {!issignInForm &&
        <input type='text' placeholder='Full Name' className='p-4 my-4 w-full'></input>
        }
        <input type='text' placeholder='Email address' className='p-4 my-4 w-full'></input>
        
        <input type='password' placeholder='Password' className='p-4 my-4 w-full'></input>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{issignInForm ? "Sign In": "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{issignInForm ? "Already Registered ? Sign In": "New to Netflix? Sign up now"}</p>

      </form>
    </div>
  )
}

export default Login