import React, { Component } from 'react'
import {Link} from 'react-router-dom';
const AcademicYear = [
  {
    year : 'Academic Year 2022-23'
  },
  {
    year : 'Academic Year 2021-22'
  },
  {
    year : 'Academic Year 2020-21'
  },
  {
    year : 'Academic Year 2019-20'
  },
  {
    year : 'Academic Year 2018-19'
  },
  {
    year : 'Academic Year 2017-18'
  },
  {
    year : 'Academic Year 2016-17'
  }
]
export default class InstituteLogin extends Component {
  render() {
    return (
     <div className="-z-10 login-container">
     <section className="text-gray-500 body-font ">
       <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
         <div className=" lg:w-[50%] md:w-1/2 md:pr-16 lg:pr-0 pr-0">
           <h1 className="title-font font-medium text-4xl text-gray-900">National Scholarship Portal</h1>
           <p className="leading-relaxed mt-4 text-gray-500">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
         </div>
         <div className=" shadow-lg lg:w-[40%] md:w-1/2 bg-veryLightGray rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
         <div className=''>
           <h2 className="text-gray-900 text-2xl text-center font-medium title-font">Login in for School / Institute</h2>
           <p className='mb-4 text-center'>(It is advisable to Login in Incognito / Private Window)</p>
           <p className='mb-5 text-md font-medium  text-brightRedLight'>
Note:- For Verification of application etc, Please select user type 'Institute Nodal Officers' and old login credentials only. User Type 'Institute Head' is for monitoring purpose only.</p>
         </div>
          <div className="mb-4">
                    <label htmlFor="country" className=" tracking-wide leading-7 text-sm text-gray-500">User Type</label>
                    <select id="country" name="country" autoComplete="country" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                      <option>Institute Head</option> 
                      <option>Institute Nodal Officer</option> 
                    </select>
          </div>
          <div className="mb-4">
                    <label htmlFor="country" className=" tracking-wide leading-7 text-sm text-gray-500">Select Academic Year</label>
                    <select id="country" name="country" autoComplete="country" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    {AcademicYear.map((items)=>(
                      <option>{items.year}</option> 
                    ))}
                    </select>
          </div>
           <div className="mb-4">
             <label htmlFor="full-name" className="tracking-wide leading-7 text-sm text-gray-500">Application ID</label>
             <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
           </div>
           <div className="mb-4">
             <label htmlFor="email" className=" tracking-wide leading-7 text-sm text-gray-500">Password</label>
             <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
           </div>
           <div>     
              <div className='flex justify-center '>
                <Link
                  to="/"
                  className="w-full  flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brightRed hover:bg-brightRedLight active:shadow-lg transition duration-30 ease-in-out"
                >
                  Login
                </Link>
              </div>
                <p className="my-4  text-base font-medium text-gray-500">
                  <Link to="/Registration" className="text-brightRed hover:text-brightRedLight">
                  School / Institute Forgot Password ?
                </Link>
               </p>
                <p className="mt-5 mb-2  text-base font-sm text-gray-500">
                Those Institutes does not have Login Credentials can contact District / State Nodal Officers for Login Credentials.
               </p>
          </div>
 
         </div>
       </div>
     </section>
     </div>
     )
  }
}
