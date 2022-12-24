import React from 'react'
import {Link} from 'react-router-dom';


export default function ItrVerification() {
  return (

     <div className='registration-container max-w-[100vw] px-6 py-24 mx-auto flex flex-wrap items-center body-font'>
    
     <div className='flex justify-center w-full mb-2'>
     <div className="flex mx-auto flex-wrap mb-3">
       <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>Aadhaar Verification
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>Student Qualification
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>Family Income
      </a>
      <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium shadow-xl bg-gray-100 inline-flex items-center leading-none border-brightRed text-brightRed tracking-wider rounded-t">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>ITR Verification
      </a>
     <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>Domicile Verification
      </a>
    </div>

     </div>
 
 
      <div className="flex justify-center items-center form-container w-full">
           <form className="w-full md:w-3/4 lg:w-1/2 bg-transparent " action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">

                <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                <h1 className='col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded'>ITR Details</h1>
                <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">PAN</label>
                     <input type="text" name="pan" id="pan" autoComplete="given-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
 
                <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Name</label>
                     <input type="text" name="name" id="name" autoComplete="family-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
 
                <div className="col-span-6 sm:col-span-4">
                     <label htmlFor="Phone_number" className="block text-sm font-medium text-gray-700">Address</label>
                     <input type="tel" name="address" id="address" autoComplete="number" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
 
                <div className="col-span-2 sm:col-span-2">
                     <label htmlFor="Phone_number" className="block text-sm font-medium text-gray-700">e-Filling Acknowledgement number</label>
                     <input type="text" name="acknowlwdge_no" id="acknowlwdge_no" autoComplete="number" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
 
               
                <div className="col-span-2 sm:col-span-2">
                     <label htmlFor="Phone_number" className="block text-sm font-medium text-gray-700">Upload* ITR report</label>
                     <input type="file" name="itr_file" id="itr_file" autoComplete="number" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
 
           
                
               
 
 
              
 
               
 
               
 
             
 
                </div>
                </div>
                     <div className="px-4 py-3 bg-veryPaleRed text-right sm:px-6">
                     <Link 
                     onClick={() => {
                         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}
                     to="/scholarships/Domicile-Verification" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"
                     >
                     Next
                     </Link>
                     </div>
                </div>
           </form>
      </div>
      </div>
 
  )
}
