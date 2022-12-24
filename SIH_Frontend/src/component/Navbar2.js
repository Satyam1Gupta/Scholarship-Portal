import React from 'react'
import {Link} from 'react-router-dom';

import Hero2 from './Hero2';
import Footer from './Footer'

import AadhaarVerification from './AadhaarVerification';
import StudentQualification from './StudentQualification';
import FamilyIncome from './FamilyIncome';

import ItrVerification from './ItrVerification';
import DomicileVerification from './DomicileVerification';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import{
  UserCircleIcon,
  LogoutIcon
} from '@heroicons/react/outline'


export default function Navbar2 () {
    return (
<>
<div className=" main-container text-gray-600 w-full body-font ">
  <div className="container w-[95%] flex flex-wrap justify-between align-top py-5 px-5 flex-col border-b-2  md:flex-row items-center">
  <Link className="flex flex-row justify-center items-center " to="/scholarships">
              <img
                className="w-auto rounded-lg h-16 md:h-12"
                src="./ashok-logo.png"
                alt=""
              />
        <div className="flex flex-col  ml-3 md:ml-2 md:mt-2">
          <span className="text-brightRed text-md font-bold">National Scholarship Portal</span>
          <span className="text-gray-500 text-xs">Ministry of Electronics & Information Technolgy ,</span>
          <span className="text-gray-500 text-xs">Government of India</span>
        </div>
      </Link>
    <div className="lg:w-2/5 flex lg:justify-end ml-5 lg:ml-0">
      <button type="button" className="w-auto  px-4 py-2 border border-transparent rounded-[10rem] shadow-sm text-base font-medium text-white bg-brightRed hover:bg-brightRedLight transition duration-30 ease-in-out"><Link to="/" className="w-full flex text-base justify-center items-center font-medium text-white">Logout
      <LogoutIcon className=" ml-1 h-5 font-bold w-5" aria-hidden="true"/>
      </Link></button>
      <div className='flex justify-center items-center ml-2'>
      <Link className="" to="/Student-Dashboard"><UserCircleIcon className='cursor-pointer h-12 w-12 font-bold text-brightRedLight'/></Link>
      </div>  

    </div>
  </div>

      <Routes>
        <Route path="/" element={<Hero2/>}/>
        <Route path="Aadhaar-Verification" element={<AadhaarVerification/>}/>
        <Route path="Student-Qualification" element={<StudentQualification/>}/>
        <Route path="Family-income" element={<FamilyIncome/>}/>
        <Route path="ITR-Verification" element={<ItrVerification/>}/>
        <Route path="Domicile-Verification" element={<DomicileVerification/>}/>
      </Routes>


</div>
<Footer/>
</>
)
}
