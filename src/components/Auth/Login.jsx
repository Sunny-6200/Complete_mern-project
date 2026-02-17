import React, { useState } from 'react'

const Login = () => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("email is",Email);
        console.log("Password is",Password);

        setEmail("")
        setPassword("")
            
    }
  return (
    <div className='h-screen w-screen flex  items-center justify-center bg-black'> 
        <div className='px-20 py-20 border-2 border-emerald-600 rounded-xl'>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={Email}
                onChange={(e)=>{
                   setEmail(e.target.value) 
                }}
                 required 
                 className='text-white   outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
                <input 
                value={Password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required
                 className='text-white    outline-none mt-3 bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-gray-400' type="password" placeholder='Enter Password'/>
                <button className='text-white   outline-none mt-7 bg-emerald-600 py-4 px-5 text-xl rounded-full border-none placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login