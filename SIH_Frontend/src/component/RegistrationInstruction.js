import React, { Component } from 'react'
import {Link} from 'react-router-dom';

const toggleDisable = () => {
     const element1 = document.getElementById('checkbox1');
     const element2 = document.getElementById('checkbox2');
     const element3 = document.getElementById('checkbox3');

     if(element1.checked && element2.checked && element3.checked )
     {
          return 1;
     }
     else return 0;
}
export default class RegistrationInstruction extends Component {



  render() {
    return (
     <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-[90%] w-full mx-auto text-center bg-white rounded p-12 shadow-lg">
          <h1 className="title-font text-lg mb-2 font-bold text-brightRedLight">Academic Year 2022-23</h1>
          <h1 className="title-font text-2xl mb-2 font-bold text-brightRed">Guidelines for Registration on National Scholarship Portal</h1>
          <h1 className="title-font mb-4 font-medium text-brightRedLight">Welcome to National Scholarsship Portal(NSP)</h1>
          <span className="inline-block h-1 w-3/4 rounded bg-brightRedLight mt-2 mb-6"></span>
          <div className='text-left'> 
               <p className="mb-2 leading-relaxed text-md font-bold text-gray-500">How to Apply?</p>
               <p className="mb-2 leading-relaxed text-md text-gray-700">Students applying for scholarship for the first time <strong>(Fresh Students)</strong> need to <strong>"Register"</strong> on the portal as fresh applicant by providing accurate and authenticated information as printed on their documents in the <strong>"Student Registration Form"</strong>.</p>
               <p className="mb-2 leading-relaxed text-md text-gray-700">The registration form is required to be filled by parents / guardian of students who are below the age of 18 years on the date of registration.</p>
               <p className="mb-2 leading-relaxed text-md text-gray-700">Before initiating registration process, students / Parents / guardian are advised to keep the following documents handy:</p>
               <p className="leading-relaxed text-md text-gray-700">1. Educational documents of student</p>
               <p className="leading-relaxed text-md text-gray-700">2. Student's Bank account number and IFSC code of the bank branch</p>
               <p className="leading-relaxed text-md text-gray-700">Note: For pre matric scholarship scheme, where students do not have their own bank account, parents can provide their own account details. However, parents account number can only be used against scholarship applications for maximum two children.</p>
               <p className="leading-relaxed text-md text-gray-700">3. Aadhaar number of the Student</p>
               <p className="leading-relaxed text-md text-gray-700">4. If Aadhaar is not available, then Bonafide student certificate from Institute / School and</p>
               <p className="leading-relaxed text-md text-gray-700">5. Aadhaar Enrolment ID and Scanned copy of Bank passbook</p>
               <p className="mb-8 leading-relaxed text-md text-gray-700">6. If Institute/School is different from domicile state of the applicant, then Bonafide student certificate from Institute / School.</p>
               <p className="mb-2 leading-relaxed text-md text-indigo-500">Brief instructions for filling up the online Application Form are given below (Fields marked with * are Mandatory fields):</p>
               
               <div className="grid grid-cols-4">
                    <div className="col-span-1 border p-1 rounded-tl ">
                         <div className='text-brightRedLight '>1. Date of Birth (DOB)*</div>
                    </div>
                    <div className="col-span-3 border p-2  rounded-tr  ">
                         <div className='text-gray-700 '>Provide DOB as printed in educational certificates.</div>
                    </div>
                    <div className="col-span-1 p-2 border ">
                         <div className='text-brightRedLight '>3. Scholarship Category*</div>
                    </div>
                    <div className="col-span-3  border p-2 ">
                         <div className='text-gray-700'>Scholarship schemes are divided in following major categories described below (Students are required to select the relevant category based on their class/course in which they are studying): </div>
                         <div className='text-gray-700'>2.1 Pre-Matric Scholarship Scheme: For students studying from Class 1st to Class 10th.</div>
                         <div className='text-gray-700'>2.2 Post - Matric Scholarship scheme/Top Class Scholarship Scheme/Merit Cum Means Scholarship Scheme: For students studying from Class 11th, 12th and above including Courses like ITI, B.SC, B. Com., B. Tech, Medical /students studying top level colleges such as IITs and IIMs/ students doing Technical and Professional courses etc. (Attach a hyperlink mentioning details of schemes of different Ministries)</div>
                    </div>
                    <div className="col-span-1 p-2 border ">
                         <div className='text-brightRedLight '>4. Name of Student*</div>
                    </div>
                    <div className="col-span-3  border p-2 ">
                         <div className='text-gray-700'>Provide name as printed in educational certificates. For students applying for Post Matric, Top Class and MCM scholarship scheme preferably provide name as printed in class 10th certificate.</div>
                         <div className='text-gray-700'>For students providing Aadhaar number to ensure that your name is correct in your Aadhaar card.</div>
                    </div>
                    <div className="col-span-1 p-2 border ">
                         <div className='text-brightRedLight '>5. Mobile Number*</div>
                    </div>
                    <div className="col-span-3  border p-2 ">
                         <div className='text-gray-700'>Provide correct and authenticated mobile number, as all the communications and One-time passwords related to portal activities will be sent as SMS on this mobile number.</div>
                         <div className='text-gray-700'>(i) In case of Post Matric, Top Class and MCM scholarship scheme only one registration is allowed with one mobile number</div>
                         <div className='text-gray-700'>(ii) For pre-matric scholarship scheme, where students do not have mobile number, parents' mobile number can be provided. The parents' mobile number can only be used for filling scholarship applications for maximum of their two children only.</div>
                    </div>
                    <div className="col-span-1 p-2 border ">
                         <div className='text-brightRedLight '>6. Email Id</div>
                    </div>
                    <div className="col-span-3  border p-2 ">
                         <div className='text-gray-700'>Provide correct and authenticated email id, as all the communications and One-time passwords related to portal activities will be sent on this email Id.</div>
                    </div>
                    <div className="col-span-1 p-2 border ">
                         <div className='text-brightRedLight '>7. Bank account details</div>
                    </div>
                    <div className="col-span-3  border p-2 ">
                         <div className='text-gray-700'>Provide active bank account number and IFSC code of the bank branch of the student. The name of bank will be automatically mentioned based on your IFSC code. If not, then write it as printed on the bank passbook.</div>
                         <div className='text-gray-700'>In case of Post Matric, Top Class and MCM scholarship scheme one registration must be done with one bank account number.Whereas, for pre matric scholarship scheme, where students do not have their own bank account number parent's account number can be used. However, parent's account number can only be provided for maximum of their two children.</div>
                    </div>
                    <div className="col-span-1  border p-2 rounded-bl ">
                         <div className='text-brightRedLight '>8. Identification Details</div>
                    </div>
                    <div className="col-span-3  border p-2 rounded-br">
                         <div className='text-gray-700'>Select and provide the information in this field very carefully. You are required to select one of the following methods for identification details:</div>
                         <div className='text-gray-700'>7.1 Aadhaar Number: Students who have Aadhaar number are required to provide 12-digit Aadhaar number as printed on Aadhaar card.</div>
                         <div className='text-gray-700'>Upon submitting the registration form, the system will match the personal identification details of the applicant with the Aadhaar records.</div>
                         <div className='text-gray-700'>Only one registration is allowed with one Aadhaar number. However, if multiple applications of a student are found in the system at a later stage, all his/her applications are liable to be rejected.</div>
                         <div className='text-gray-700'>It may be noted that your Aadhaar Number could also be used for crediting scholarship amount in the bank account linked* to your Aadhaar number in fast track mode.</div>
                         <div className='text-gray-700'>For all such cases, where student does not possess Aadhaar, he is required to provide a bonafide certificate issued by his Institute/School in the prescribed proforma along-with Aadhaar enrolment number and scanned copy of first page of his Bank passbook (containing the photograph of the applicant)</div>
                         <div className='text-gray-700'>*To link your bank account with Aadhaar number for receiving scholarship in the same, please visit you bank branch and submit a "bank consent form for receiving DBT". You can check which bank is linked to your Aadhaar number on NPCI mapper here https://resident.uidai.gov.in/bank-mapper or through Aadhaar-enabled micro-ATM machine of any of these banks.</div>
                    </div>
               </div>
          </div>
          
          <span className="inline-block h-[1px] w-full rounded bg-gray-200 mt-8"></span>

          <div className='my-6 text-left'>
               <p className="mb-2 leading-relaxed text-md font-bold text-brightRedLight">Important Note :</p>
               <p className="mb-2 leading-relaxed text-md text-gray-700">1. After submitting the application, the default login id and password to log into NSP portal will be sent to the provided mobile number. In case the password is not received, the option for forgot password at login page shall be used.</p>
               <p className="mb-2 leading-relaxed text-md text-gray-700">2. Students are advised to provide "Annual Family Income" as per the Income Certificate issued by competent authority in their scholarship application.</p>
          </div>

          <div className='my-2 '>
               <p className="mb-2 leading-relaxed text-md font-bold text-brightRedLight">Undertaking By Applicant or Parents/Guardian(In Case of Minor)</p>

               
          <div className="flex items-center mb-2">
               <input id="default-checkbox1" type="checkbox"  className="checkbox w-4 h-4 text-brightRedLight bg-gray-100 rounded border-gray-300 focus:ring-brightRedLight focus:ring-2"/>
               <label htmlFor="default-checkbox" className="ml-2 text-left leading-relaxed text-md text-gray-700">I have read and understood the guidelines for registration.</label>
          </div>
          <div className="flex items-center mb-2">
               <input id="default-checkbox2" type="checkbox" value="" className="checkbox w-4 h-4 text-brightRedLight bg-gray-100 rounded border-gray-300 focus:ring-brightRedLight focus:ring-2"/>
               <label htmlFor="default-checkbox" className="ml-2 leading-relaxed text-left  text-md text-gray-700">I am aware that if more than one application is found to be filled (fresh or renewal), all my/my child's/ward's applications are liable to be rejected.</label>
          </div>
          <div className="flex items-center mb-2">
               <input id="default-checkbox3" type="checkbox" value="" className="checkbox w-4 h-4 text-brightRedLight bg-gray-100 rounded border-gray-300 focus:ring-brightRedLight focus:ring-2"/>
               <label htmlFor="default-checkbox" className="ml-2 leading-relaxed text-md text-left  text-gray-700">I am aware that my bank account details may be changed only once after due process in accordance with the provisions of the process.</label>
          </div>
          <div className='flex w-full justify-center'> 
               <button type="button" className="w-[8rem] items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brightRed hover:bg-brightRedLight transition duration-30 ease-in-out" disabled><Link onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} to="/EmailVerification" className="w-full text-base font-medium text-white">Continue</Link></button>
          </div>
          </div>
          </div>
          </div>
     </section>
     ) 
     }
}


