import React, { Component ,useState} from 'react'
import {Link} from 'react-router-dom';

const stateScheme = [
     {
          no : 1,
          state : 'Assam',
          list : [
               {
                    schemeName : 'Pre-Matric Scholarship for SC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for SC students ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Pre-Matric Scholarship for OBC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for OBC students - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
          ],
     },
     {
          no : 2,
          state : 'Arunachal Pradesh',
          list : [
               {
                    schemeName : 'Pre-Matric Scholarship for SC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for SC students ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Pre-Matric Scholarship for OBC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for OBC students - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
          ],
     },
     {
          no : 3,
          state : 'Chandigarh',
          list : [
               {
                    schemeName : 'Pre-Matric Scholarship for SC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for SC students ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Pre-Matric Scholarship for OBC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for OBC students - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
          ],
     },
]
const centralScheme = [
     {
          no : 1,
          state : 'Ministry of Minority Affairs',
          list : [
               {
                    schemeName : 'Pre-Matric Scholarship for SC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for SC students ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Pre-Matric Scholarship for OBC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for OBC students - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
          ],
     },
     {
          no : 2,
          state : 'Department of Empowerment of Persons with Disabilities',
          list : [
               {
                    schemeName : 'Pre-Matric Scholarship for SC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for SC students ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Pre-Matric Scholarship for OBC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for OBC students - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
          ],
     },
     {
          no : 3,
          state : 'Ministry of Social Justice & Empowerment',
          list : [
               {
                    schemeName : 'Pre-Matric Scholarship for SC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for SC students ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Pre-Matric Scholarship for OBC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for OBC students - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
          ],
     },
]
const ugcScheme = [
     {
          no : 1,
          state : 'University Grants Commission - MHRD',
          list : [
               {
                    schemeName : 'Pre-Matric Scholarship for SC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for SC students ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Pre-Matric Scholarship for OBC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for OBC students - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
          ],
     },
     {
          no : 2,
          state : 'All India Council for Technical Education - AICTE',
          list : [
               {
                    schemeName : 'Pre-Matric Scholarship for SC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for SC students ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Pre-Matric Scholarship for OBC students (Class IX and X) - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
               {
                    schemeName : 'Post-Matric Scholarship for OBC students - ASSAM ',
                    closingDate : 'Open till 31-09-2022',
                    defDate : 'Open till 15-10-2022',
                    instVerification : 'Open till 15-10-2022',
                    Guidelines : '/',  
                    FAQ : '/',  
               },          
          ],
     },
]

const InstituteNotification = [
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
]

const NodalNotification = [
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
]

const studentNotification = [
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
     {
          description : 'All grievances related to delay in Application Verification, Scheme Selection / Eligibility, extension of verification dates, delay in Scholarship Payment should be addressed to the grievance redressal / Nodal officer of the concerned scheme owner ministry / Department. The details of grievance redressal / nodal officers is available under “Officer’s Information” section at “Officer’s Corner”section on the portal.'
     },
]



export default function Hero2 (){
     const [openTab, setOpenTab] = useState(1);

    return (
         
     <section className='w-full flex justify-center items-center py-8'>
     <div className="max-w-100vw md:w-1/2 schemes-container flex flex-wrap">
     <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-2 flex-row" role="tablist">
               <li className="-mb-px mr-1 flex-auto text-center">
                    <a
                    className={
                    "mb-1 text-font-medium mr-1 px-5 py-3 shadow-lg rounded block leading-normal hover:text-brightRedLight " +
                    (openTab === 1
                         ? "text-white bg-brightRed"
                         : "text-gray-500 bg-white")
                    }
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
               >
                    Central Scheme
                    </a>
               </li>
               <li className="-mb-px mr-1 flex-auto text-center">
                    <a
                    className={
                    "mb-1 text-font-medium px-5 py-3 shadow-lg rounded block leading-normal hover:text-brightRedLight " +
                    (openTab === 2
                         ? "text-white bg-brightRed"
                         : "text-gray-500 bg-white")
                    }
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
               >
                    UGC / AICTE Scheme
                    </a>
               </li>
               <li className="-mb-px mr-1 flex-auto text-center">
                    <a
                    className={
                    "mb-1 text-font-medium px-5 py-3 shadow-lg rounded block leading-normal hover:text-brightRedLight " +
                    (openTab === 3
                         ? "text-white bg-brightRed"
                         : "text-gray-500 bg-white")
                    }
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
               >
                    State Scheme
                    </a>
               </li>
               
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
               <div className={openTab === 1 ? "block" : "hidden"} id="link1">

               <div className="accordion" id="accordionExample1">
                    { 
                         centralScheme.map((item) => (  
                         <>
                         <div className="accordion-item bg-veryPaleRed border border-gray-200">
                         <h2 className="accordion-header mb-0" id={`heading-${item.no}-1`}>
                         <button className="
                         accordion-button
                         collapsed
                         relative
                         flex
                         items-center
                         w-full
                         py-4
                         px-5
                         text-base text-gray-800 text-left
                         bg-white
                         border-0
                         rounded-none
                         transition
                         focus:outline-none"
                         type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.no}-1`} aria-expanded="true"
                         aria-controls={`collapse-${item.no}-1`}>
                         {item.state}
                         </button>
                         </h2>
                         <div id={`collapse-${item.no}-1`} className={item.no===0?"accordion-collapse collapse show":"accordion-collapse collapse "} aria-labelledby={`heading-${item.no}-1`}
                         data-bs-parent="#accordionExample">
                         <div className="accordion-body py-2 px-2 bg-white">
                              <div className='grid grid-cols-12 text-sm'>
                                   <div className="col-span-4 border p-1 bg-brightRedLight  rounded-tl ">
                                        <div className='text-white '>Scheme Name</div>
                                   </div>
                                   <div className="col-span-2 border p-1 bg-brightRedLight ">
                                        <div className='text-white '>Scheme Closing Date</div>
                                   </div>
                                   <div className="col-span-2 border p-1 bg-brightRedLight ">
                                        <div className='text-white '>Defective Application Verification Date</div>
                                   </div>
                                   <div className="col-span-4 border p-1 bg-brightRedLight rounded-tr ">
                                        <div className='text-white '>Institution Verification</div>
                                   </div>


                                   <div className="col-span-4 border p-1  ">
                                        <div className='text-gray-700'>Pre Matric Scholarships Scheme for Minorities</div>
                                   </div>
                                   <div className="col-span-2 border p-1 ">
                                        <div className='text-gray-700'>Open till 30-09-2022</div>
                                   </div>
                                   <div className="col-span-2 border p-1 ">
                                        <div className='text-gray-700'>Open till 16-10-2022</div>
                                   </div>
                                   <div className="col-span-2 border p-1 ">
                                        <div className='text-gray-700'>Open till 16-10-2022</div>
                                   </div>
                                   <div className="col-span-2 border p-1 text-center ">
                                        <div className='text-indigo-500'><Link to="Aadhaar-Verification" className="cursor-pointer ">Apply</Link></div>
                                   </div>

                              </div>
                         </div>
                         </div>
                         </div>
                         </>                         
                     ))}
                    </div>
               </div>

               <div className={openTab === 2 ? "block" : "hidden"} id="link2">
               <div className="accordion" id="accordionExample2">
                    { 
                         ugcScheme.map((item) => (  
                         <>
                         <div className="accordion-item bg-veryPaleRed border border-gray-200">
                         <h2 className="accordion-header mb-0" id={`heading-${item.no}-2`}>
                         <button className="
                         accordion-button
                         collapsed
                         relative
                         flex
                         items-center
                         w-full
                         py-4
                         px-5
                         text-base text-gray-800 text-left
                         bg-white
                         border-0
                         rounded-none
                         transition
                         focus:outline-none"
                         type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.no}-2`} aria-expanded="true"
                         aria-controls={`collapse-${item.no}-2`}>
                         {item.state}
                         </button>
                         </h2>
                         <div id={`collapse-${item.no}-2`} className={item.no===0?"accordion-collapse collapse show":"accordion-collapse collapse "} aria-labelledby={`heading-${item.no}-2`}
                         data-bs-parent="#accordionExample">
                         <div className="accordion-body py-4 px-5">
                         <strong>This is the first item's accordion body.</strong> It is shown by default,
                         until the collapse plugin adds the appropriate classes that we use to style each
                         element. These classes control the overall appearance, as well as the showing and
                         hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                         our default variables. It's also worth noting that just about any HTML can go within
                         the <code>.accordion-body</code>, though the transition does limit overflow.
                         </div>
                         </div>
                         </div>
                         </>                         
                     ))}
                    </div>



               </div>
               <div className={openTab === 3 ? "block" : "hidden"} id="link3">
               
               <div className="accordion" id="accordionExample3">
               { 
                         stateScheme.map((item) => (  
                         <>
                         <div className="accordion-item bg-veryPaleRed border border-gray-200">
                         <h2 className="accordion-header mb-0" id={`heading-${item.no}-2`}>
                         <button className="
                         accordion-button
                         collapsed
                         relative
                         flex
                         items-center
                         w-full
                         py-4
                         px-5
                         text-base text-gray-800 text-left
                         bg-white
                         border-0
                         rounded-none
                         transition
                         focus:outline-none"
                         type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.no}-2`} aria-expanded="true"
                         aria-controls={`collapse-${item.no}-2`}>
                         {item.state}
                         </button>
                         </h2>
                         <div id={`collapse-${item.no}-2`} className={item.no===0?"accordion-collapse collapse show":"accordion-collapse collapse "} aria-labelledby={`heading-${item.no}-2`}
                         data-bs-parent="#accordionExample">
                         <div className="accordion-body py-4 px-5">
                         <strong>This is the first item's accordion body.</strong> It is shown by default,
                         until the collapse plugin adds the appropriate classes that we use to style each
                         element. These classes control the overall appearance, as well as the showing and
                         hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                         our default variables. It's also worth noting that just about any HTML can go within
                         the <code>.accordion-body</code>, though the transition does limit overflow.
                         </div>
                         </div>
                         </div>
                         </>                         
                     ))}                         
               </div>


               </div>
          </div>
          </div>
          </div>
     </div>
     </div>
     </section>

    )
  
}
