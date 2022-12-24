import './App.css';
import Navbar from './component/Navbar';
import React, { useState } from 'react'
import Navbar2 from './component/Navbar2';
import Dashboard from './component/Dashboard';
import OfficeNavbar from './component/OfficerDashboard/OfficeNavbar';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/*" element={<Navbar/>}/>
        <Route path="/scholarships/*" element={<Navbar2/>}/>
        <Route path="/Student-Dashboard/*" element={<Dashboard/>}/>
        <Route path="/Office-Dashboard/*" element={<OfficeNavbar/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
