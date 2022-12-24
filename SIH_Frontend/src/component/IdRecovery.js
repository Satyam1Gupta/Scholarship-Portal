/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import {Link} from 'react-router-dom';

export default function IdRecovery() {
  return (  
    <div className="-z-10 login-container">
    <section className="text-gray-500 body-font ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">National Scholarship Portal</h1>
          <p className="leading-relaxed mt-4 text-gray-500">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
        </div>
        <div className=" shadow-md lg:w-2/6 md:w-1/2 bg-veryLightGray rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">Forgot Application ID </h2>
          <div className="mb-4">
            <label htmlFor="full-name" className="tracking-wide leading-7 text-sm text-gray-500">Enter Registered Mobile Number / Email Address</label>
            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <div >
                <Link
                  to="/Login"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brightRed hover:bg-brightRedLight active:shadow-lg transition duration-30 ease-in-out"
                >
                  Confirm
                </Link>      
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}
