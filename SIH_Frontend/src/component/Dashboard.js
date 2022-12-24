import React from 'react'
import Navbar from './Dashboard-comp/Navbar'
import Footer from './Footer'
import Hero3 from './Dashboard-comp/Hero3';
import Qualification from './Dashboard-comp/Qualification';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default function Dashboard() {
  return (
<>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Hero3/>}/>
        <Route path="/qualification" element={<Qualification/>}/>
      </Routes>
    <Footer/>
</>
  )
}
