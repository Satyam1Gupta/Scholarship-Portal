import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {
     ThumbUpIcon
   } from '@heroicons/react/outline'

   export default class RenewalLogin extends Component {
  render() {
    return (
     <div className="-z-10 login-container">
     <section className="text-gray-500 body-font ">
       <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
         <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
           <h1 className="title-font font-medium text-3xl text-gray-900">National Scholarship Portal</h1>
           <p className="leading-relaxed mt-4 text-gray-500">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
         </div>
         <div className=" shadow-md lg:w-2/6 md:w-1/2 bg-veryLightGray rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
           <h2 className="text-center text-gray-900 text-2xl font-medium title-font mb-2">Login to Account AY:2022-23</h2>
           <p className='text-center text-brightRedLight text-md font-medium mb-5'>(Application Id is same as last year student Id)</p>
           <div className="mb-4">
             <label htmlFor="full-name" className="tracking-wide leading-7 text-sm text-gray-500">Application ID</label>
             <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
           </div>
           <div className="mb-4">
             <label htmlFor="email" className=" tracking-wide leading-7 text-sm text-gray-500">Password</label>
             <input type="password" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
           </div>
           <div >
                   <p className="mb-2  text-base font-medium text-gray-500">
                     <Link to="/Registration" className="text-brightRed hover:text-brightRedLight">
                       Forgot Password ?
                     </Link>
                   </p>
                   <p className="mb-2 text-base font-medium text-gray-500">
                     <Link to="/Registration" className="text-brightRed hover:text-brightRedLight">
                       Forgot Application Id ?
                     </Link>
                   </p>
                   <p className="mb-4 text-base font-medium text-gray-500">
                     <Link to="/Registration" className="text-brightRed hover:text-brightRedLight">
                       Update Mobile No ?
                     </Link>
                   </p>
                 <Link
                   to="/"
                   className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brightRed hover:bg-brightRedLight active:shadow-lg transition duration-30 ease-in-out"
                 >
                   Login
                 </Link>
                 <span className="inline-block h-[1px] w-full rounded bg-gray-300 mt-8 mb-6"></span>
                 <div className='text-gray-700 text-md font-medium mb-3 flex align-center'>
                    <i className="flex justify-center mr-2 fa fa-thumbs-up"></i>
                    <p >In case of completion of course, you can not apply for renewal.</p>
                 </div>
               
                 <div className='text-gray-700 text-md font-medium mb-4 flex align-center'>
                    <i className="mr-2 fa fa-thumbs-up"></i>
                    <p > Students eligible for renewal are advised not to apply in fresh category as duplicate applications will be rejected by NSP. In you want to apply for Fresh, withdraw your Renewal Application from NSP.</p>
                 </div>
               
             </div>
 
         </div>
       </div>
     </section>
     </div>
 
    )
  }
}
