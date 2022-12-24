import React from 'react'
import{
     AcademicCapIcon
} from '@heroicons/react/outline'


const user = {
     name: 'Tom Cook',
     email: 'tom@example.com',
     imageUrl:
       'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Qualifications() {
  return (
     <div className="main-container">
   
     <main className='grid grid-cols-6 gap-6 p-8 md:py-12 md:px-48'>

          <div className="col-span-6 shadow-lg mx-auto rounded-lg bg-white w-full py-12 px-8 lg:px-16">
               <div className=''>
               <div className='flex py-2 mb-4 '>
                    <i class="fas fa-medal text-brightRed h-8 w-8 mr-2  inline-flex justify-center items-center"></i>
                    <h1 className='text-brightRed text-2xl block'>Student Qualification</h1>
               </div>

               <div className='grid grid-cols-4 gap-4 flex-row h-full items-center justify-between px-12'>

                    <div className='col-span-4 md:col-span-3 w-full  grid grid-cols-6 '>
                         <h1 className='col-span-6 font-bold text-brightRedLight'>HSLC</h1>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Exam Name : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>HSLC</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Board / University Name : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>8879879087</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Division : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>birajj2001@gmail.com</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Totwl Marks : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Male</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Marks Obtained : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>havsahvs ahsvahvs</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Percentage : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>dvys zbdiubd</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Pass Certificate : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Kamrup</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Marksheet : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Assam</div>
                    </div>
                    <div className='col-span-4 md:col-span-3 w-full  grid grid-cols-6 '>
                         <h1 className='col-span-6 font-bold text-brightRedLight'>HSSLC</h1>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Exam Name : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>HSSLC</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Board / University Name : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>8879879087</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Division : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>birajj2001@gmail.com</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Totwl Marks : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Male</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Marks Obtained : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>havsahvs ahsvahvs</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Percentage : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>dvys zbdiubd</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Pass Certificate : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Kamrup</div>
                         <div className='col-span-2 w-full border-b border-t flex items-center'>Marksheet : </div>
                         <div className='col-span-4 w-full border-b border-t flex items-center'>Assam</div>
                    </div>
               </div>
               </div>
          </div>
     </main>
   </div>
  )
}
