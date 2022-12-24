import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
          <footer className="text-gray-600 body-font bg-veryPaleRed ">
               <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
               <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex flex-col title-font font-medium items-center md:items-center md:justify-start justify-center text-gray-900">
                         <img className="w-12 rounded-lg md:w-16" src="./ashok-logo.png" alt=""/>
                         <div className="flex flex-col text-xs ml-3 md:ml-2 md:mt-2">
                              <span className="text-gray-900 font-bold">Department of Social Justice & Empowerment</span>
                              <span className="text-gray-500 ">Ministry of Social Work and Empowerment</span>
                              <span className="text-gray-500 ">Government of India</span>
                         </div>
                    </a>
               </div>
               <div className="flex-grow flex flex-wrap justify-end md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POLICIES</h2>
                    <nav className="list-none mb-10">
                         <li>
                         <a href="/Copyright" className="text-gray-600 hover:text-gray-800 cursor-pointer">Copyright Policy</a>
                         </li>
                         <li>
                         <a href="/Privacy" className="text-gray-600 hover:text-gray-800 cursor-pointer">Privacy Policy</a>
                         </li>
                         <li>
                         <a href="/Terms" className="text-gray-600 hover:text-gray-800 cursor-pointer">Terms and condition</a>
                         </li>
                         <li>
                         <a href="/Disclaimer" className="text-gray-600 hover:text-gray-800 cursor-pointer">Disclaimer</a>
                         </li>
                         <li>
                         <a href="/Hyperlink" className="text-gray-600 hover:text-gray-800 cursor-pointer">Hyperlinking Policy</a>
                         </li>
                         <li>
                         <a href="/SiteMap" className="text-gray-600 hover:text-gray-800 cursor-pointer">Site Map</a>
                         </li>
                    </nav>
                    </div>
               </div>
               </div>    
               <div className="bg-veryDarkBlue ">
               <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">This site is developed by students of Assam University <br/> © Copyright 2022 —
                    <a href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="">National Scholarship Portal</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a className="text-gray-500 cursor-pointer" target=" " href='https://www.facebook.com/ministryofsocial.justice.and.empowerment1'>
                         <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                         <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                         </svg>
                    </a>
                    <a className="ml-3 text-gray-500 cursor-pointer" target=" " href="https://twitter.com/msjegoi?lang=en">
                         <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                         <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                         </svg>
                    </a>
                    <a className="ml-3 text-gray-500 cursor-pointer" target=" " href='https://www.instagram.com/msjegoi/'>
                         <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                         <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                         <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                         </svg>
                    </a>
                    <a className="ml-3 text-gray-500">
                         <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                         <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                         <circle cx="4" cy="4" r="2" stroke="none"></circle>
                         </svg>
                    </a>
                    </span>
               </div>
               </div>
          </footer>
    )
  }
}

export default Footer