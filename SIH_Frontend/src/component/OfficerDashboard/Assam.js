import React from 'react'
import { BellIcon, MenuIcon, XIcon, UserGroupIcon,AcademicCapIcon } from '@heroicons/react/outline'
const user = {
     name: 'Tom Cook',
     email: 'tom@example.com',
   }


function Assam() {
  return (
     <div className=' bg-white '>

          <h1 className='text-center text-6xl'>List of Student Applied</h1>
          <div className='grid grid-cols-6 gap-6 p-8 md:py-8 md:px-36 lg:py-12 lg:px-64 h-auto'>

          <div className="col-span-6 shadow-lg mx-auto rounded-lg bg-white w-full py-12 px-8 lg:px-16">
               <div className=''>
               <div className='flex py-2 mb-4'>
                    <AcademicCapIcon className='text-brightRed h-8 w-8 mr-2  inline-flex'/>
                    <h1 className='text-brightRed text-2xl block'>Applicant Number 1</h1>
               </div>

               <div className='grid grid-cols-4 gap-4 flex-row h-full items-center justify-between'>
                    <div className='col-span-4 md:col-span-1 flex-col w-full h-full items-center justify-center'>
                         <img className="h-36 w-36 inline-flex text-white" src={user.imageUrl} alt="" />
                         <div className='my-6'>
                              <span className='font-bold text-md'>Application Id :</span>
                              <span className='font-bold text-md'> 03845-2385</span>
                         </div>
                    </div>
                    <div className='col-span-4 md:col-span-3 w-full  grid grid-cols-6 '>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Name : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Biraj Mahanta</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Mobile No : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>8879879087</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Email : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>birajj2001@gmail.com</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Gender : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Male</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Mothers Name : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>havsahvs ahsvahvs</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Fathers Name : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>dvys zbdiubd</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>District : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Kamrup</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>State : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Assam</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Pin : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>788011</div>
                    </div>
               </div>
               </div>
          </div>
          </div>
     <div className='grid grid-cols-6 gap-6 p-8 md:py-8 md:px-36 lg:py-12 lg:px-64'>
          <div className="col-span-6 shadow-lg mx-auto rounded-lg bg-white w-full py-12 px-8 lg:px-16">
               <div className=''>
               <div className='flex py-2 mb-4'>
                    <AcademicCapIcon className='text-brightRed h-8 w-8 mr-2  inline-flex'/>
                    <h1 className='text-brightRed text-2xl block'>Applicant Number 2</h1>
               </div>

               <div className='grid grid-cols-4 gap-4 flex-row h-full items-center justify-between'>
                    <div className='col-span-4 md:col-span-1 flex-col w-full h-full items-center justify-center'>
                         <img className="h-36 w-36 inline-flex text-white" src={user.imageUrl} alt="" />
                         <div className='my-6'>
                              <span className='font-bold text-md'>Application Id :</span>
                              <span className='font-bold text-md'> 03845-2385</span>
                         </div>
                    </div>
                    <div className='col-span-4 md:col-span-3 w-full  grid grid-cols-6 '>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Name : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Biraj Mahanta</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Mobile No : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>8879879087</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Email : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>birajj2001@gmail.com</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Gender : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Male</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Mothers Name : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>havsahvs ahsvahvs</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Fathers Name : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>dvys zbdiubd</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>District : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Kamrup</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>State : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Assam</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Pin : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>788011</div>
                    </div>
               </div>
               </div>
          </div>
          </div>
     </div>


  )
}

export default Assam