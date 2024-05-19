import React from 'react'
import Button from '../components/Button'
const Login = () => {
  return (
    <div className='w-screen h-screen flex justify-center py-12' >
      <div className='border border-black w-1/2  flex flex-col justify-center rounded-lg px-4 gap-12'>
        <label htmlFor='name'className='border-2'>
           <input type="text" name="name" id="name" placeholder='name' className='w-full'/>
          </label>  
        <label htmlFor='email' className='border-2'>
           <input type="text" name="name" id="email" className='w-full'/>
        </label>
        <label htmlFor='dateOfBirth' className='border-2'>
           <input type="text" name="name" id="dateOfBirth" className='w-full'/>
        </label>
        <label htmlFor='placeOfResidence' className='border-2'>
           <input type="text" name="name" id="placeOfResidence" className='w-full'/>
        </label>
        <label htmlFor='phoneNumber' className='border-2'>
           <input type="text" name="name" id="phoneNumber" className='w-full'/>
        </label>
        <Button label={"Signup"} outline={"black"}/>
      </div>
    </div>
  )
}

export default Login