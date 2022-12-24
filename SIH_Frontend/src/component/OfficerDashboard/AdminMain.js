import React, { useState } from 'react';
// import BarChart from './BarChart';
import {Bar} from 'react-chartjs-2' 
import {Chart as ChartJS} from 'chart.js/auto';
import {Link} from 'react-router-dom';
import Assam from './Assam';

import {
     BrowserRouter as Router,
     Route,
     Routes,
   } from "react-router-dom";


const states = [
     { name: 'Andra Pradesh',  },
     { name: 'Arunachal Pradesh' },
     { name: 'Assam' },
     { name: 'Bihar' },
     { name: 'Chattisgarh' },
     { name: 'Goa' },
     { name: 'Gujrat' },
     { name: 'Haryana' },
     { name: 'Himachal Pradesh' },
     { name: 'Jammu Kashmir' },
     { name: 'Jharkhand' },
     { name: 'Karnataka' },
     { name: 'Kerala' },
     { name: 'Madhya Pradesh' },
     { name: 'Maharashtra' },
     { name: 'Manipur' },
     { name: 'Meghalaya' },
     { name: 'Mizoram' },
     { name: 'Nagaland' },
     { name: 'Odisha' },
     { name: 'Punjab' },
     { name: 'Rajasthan' },
     { name: 'Sikkim' },
     { name: 'Tamil Nadu' },
     { name: 'Telngana' },
     { name: 'Tripura' }
]

let xValues = ["Jan", "Feb", "Mar", "Apr", "Jun","Jul", "Aug", "Sep", "Oct", "Nov"];
let yValues = [55, 29, 44, 24, 15,55, 39, 44, 22, 15,42,10];
let barColors = ["hsl(12,88%,59%)","hsl(12,88%,59%)","hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)", "hsl(12,88%,59%)"  ];

export default function AdminMain() {

     // const [userData , setUserData] = useState ({
     //      labels : xValues.map((data)=>data),
     //      datasets :  [{
     //           labels : "pop",
     //           data : yValues.map((data)=>data)
     //      }]
     // })

  return (
     <>
     <section className='main-container px-12 py-16'>

     <div className='grid grid-cols-6 gap-6'>
          <div className='flex justify-between col-span-6 md:col-span-2 bg-white rounded px-8 py-4 shadow-lg '>
               <h1>Total Applied</h1>
               <span className='text-2xl font-bold text-brightRed'>150</span>
          </div>
          <div className=' flex justify-between col-span-6 md:col-span-2 bg-white rounded px-8 py-4 shadow-lg '>
               <h1>Pending Applications</h1>
               <span className='text-2xl font-bold text-brightRed'>50</span>
          </div>
          <div className='flex justify-between col-span-6 md:col-span-2 bg-white rounded px-8 py-4 shadow-lg '>
               <h1>Available scholarships</h1>
               <span className='text-2xl font-bold text-brightRed'>10</span>
          </div>
     </div>

     <div className='grid grid-cols-6 gap-6 py-8 '>

          <div className='col-span-6 md:col-span-4 bg-white border-lg rounded px-4 py-4 shadow-lg'>
               <div className='py-12 '>
                    <span className='py-8 text-2xl font-bold text-brightRed'>Monthly Distribution of Students Registered</span>
               <Bar data={
               {
               labels :["Jan", "Feb", "Mar", "Apr", "Jun","Jul", "Aug", "Sep", "Oct", "Nov"],
               datasets :  [
                    {
                    label : 'Students Applied',
                    data : [55, 49, 44, 24, 15,55, 49, 44, 24, 15,12,10],
                    backgroundColor: [
                    'hsl(12,88%,95%)',
                    ],
                    }
               ],
               }
               }/>
               </div>
               <div className='py-12 '>
                    <span className='my-8 text-2xl font-bold text-brightRed'>Monthly Distribution of Students Applied</span>
               <Bar data={
               {
               labels :["Jan", "Feb", "Mar", "Apr", "Jun","Jul", "Aug", "Sep", "Oct", "Nov"],
               datasets :  [
                    {
                    label : 'Students Applied',
                    data : [55, 49, 44, 24, 15,55, 49, 44, 24, 15,12,10],
                    backgroundColor: [
                    'hsl(12,88%,95%)',
                    ],
                    }
               ],
               }
               }/>
               </div>
          </div>

          <div className='col-span-6 md:col-span-2 bg-white px-2 py-2 rounded shadow-lg '>
               <div className='flex justify-center h-16'>
                    <span className='text-lg font-bold m-auto text-brightRed'>State wise Students applied</span>
               </div>
               {    states.map((item) => (

                    <Link to={`${item.name}`} className='flex justify-between px-2 py-2 mb-2 border rounded'>
                         <h1>{item.name}</h1>
                         <span className='text-lg text-brightRedLight'>150</span>
                    </Link>
               ))
               }

          </div>
     </div>
                  
</section>


<Routes>
     <Route path="Assam" element={<Assam/>}></Route>
</Routes>
</>
  )
}
