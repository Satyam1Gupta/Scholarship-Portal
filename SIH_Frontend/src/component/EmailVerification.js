import React from 'react'
import {Link} from 'react-router-dom';

function EmailVerification() {


  return (
    <div className='px-24 py-24 w-full flex justify-center items-center'>
     <div className='bg-white px-16 py-8 shadow-lg rounded-lg'>
    <h1 className='my-4 text-4xl'>Email Veification</h1>
          <form className=" grid grid-cols-6" action="">
               <div className="col-span-6">
                    <label htmlFor="gmail" className="block text-md font-medium text-gray-700">Email</label>
                    <input type="text" name="email" id="email" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    <input  type="submit" className='text-brightRedLight hover:text-brightRed' value="Send OTP"/>
               </div>
          </form>

          <form  className="mt-4 grid grid-cols-6" action="">

          <div className="col-span-6">
               <label htmlFor="otp" className="block text-md font-medium text-gray-700">OTP</label>
               <input type="text" name="otp" id="email-otp" autoComplete="family-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               <input type="submit" className='text-brightRedLight hover:text-brightRed' value="Verify OTP"/>
          </div>
          </form>
          <div className="w-full mt-6">
               <button><Link onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'mdooth'});}} to="/Registration" className="w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-md text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"       >
                    Next
               </Link></button>
          </div>

     </div>

    </div>
  )
}

export default EmailVerification