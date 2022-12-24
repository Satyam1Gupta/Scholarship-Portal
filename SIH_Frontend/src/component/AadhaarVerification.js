import React,{useState} from "react";
import { Link } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

const AadhaarVerification=() =>{

    const [userdata,setUserdata]=useState(null)
     const navigate = useNavigate();
     const [user, setUser] = useState({
       first_name: "",
       last_name: "",
       aadhaar_no:"",
       phone_number: "",
       phone_otp: "",
       dob: "",
     
     });
     let name, value;
     const handleInputs = (e) => {
       name = e.target.name;
       value = e.target.value;
       setUser({ ...user, [name]: value });
     };
     const PostData = async (e) => {
       e.preventDefault();
       const {
         first_name,
         last_name,
         aadhaar_no,
         phone_number,
         phone_otp,
         dob,
       
       } = user;

       await fetch('http://localhost:8000/api/aadhaar')
       .then((response) => response.json())
       .then((data) => setUserdata(data));
       console.log(userdata[0])
       console.log(dob)
       //console.log(toString(dob))
       let f1=0 , f2=0,f3=0,f4=0,f5=0;
       for (let i = 0; i < userdata.length; i++) {
        if(userdata[i].phone_number===phone_number)
        {
          // navigate("/scholarships/Student-Qualification");
          f1=1;
        }
        if( userdata[i].first_name===first_name) 
        {
          // navigate("/scholarships/Student-Qualification");
          f2=1;
        }
        if(  userdata[i].last_name===last_name)
        {
          // navigate("/scholarships/Student-Qualification");
          f3=1;
        }
        if( userdata[i].aadhar_no===aadhaar_no)
        {
          // navigate("/scholarships/Student-Qualification");
          f4=1;
        }
        if(userdata[i].dob==dob)
        {
           
          f5=1;
        }
      }
      if(f1===0){
        window.alert("Incorrect Phone number !!");
      }
      if(f2===0){
        window.alert("Incorrect First Name !!");
      }
      if(f3===0){
        window.alert("Incorrect Last Name !!");
      }
      if(f4===0){
        window.alert("Incorrect Aadhaar no !!");
      }
      if(f5===0){
        window.alert("Incorrect DOB !!");
      }
      if(f1===1&&f2===1&&f2===1&&f3===1&&f4===1&&f5===1){
        navigate("/scholarships/Student-Qualification");
      }
    }
   return (
    <div className="registration-container max-w-[100vw] px-6 py-24 mx-auto flex flex-wrap items-center body-font">
      <div className="flex justify-center w-full mb-2">
        <div className="flex mx-auto flex-wrap mb-20">
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium shadow-xl bg-gray-100 inline-flex items-center leading-none border-brightRed text-brightRed tracking-wider rounded-t">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Aadhaar Verification
          </a>
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            Student Qualification
          </a>
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
            Family Income
          </a>
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            ITR Verification
          </a>
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Domicile Verification
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center form-container w-full">
        <form
          className="w-full md:w-3/4 lg:w-1/2 bg-transparent "
          action="#"
          method="POST"
        >
          <div className="shadow overflow-hidden sm:rounded-md">
            <h1 className="bg-white text-3xl w-full text-center text-gray-900 py-6 rounded">
              Aadhaar Verification
            </h1>
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>First name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    value={user.first_name}
                    onChange={handleInputs}
                    autoComplete="given-name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  
                    
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={user.last_name}
                    onChange={handleInputs}
                    autoComplete="family-name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Aadhaar Number
                  </label>
                  <input
                    type="text"
                    name="aadhaar_no"
                    id="aadhaar_no"
                    value={user.aadhaar_no}
                    onChange={handleInputs}
                    autoComplete="family-name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>


                <div className="col-span-6 md:col-span-3">
                  <label
                    htmlFor="Phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="Same as linked with Aadhaar"
                    id="phone_number"
                    value={user.phone_number}
                    onChange={handleInputs}
                    autoComplete="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-3 md:col-span-2">
                  <label
                    htmlFor="Phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>OTP
                  </label>
                  <input
                    type="text"
                    name="phone_otp"
                    id="phone_otp"
                    value={user.phone_otp}
                    onChange={handleInputs}
                    autoComplete="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="col-span-3 md:col-span-1 flex items-center justify-center">
                  <button className="text-brightRedLight active:text-brightRed">
                    Send OTP
                  </button>
                </div>

              

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={user.dob}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Upload Aadhaar
                    (* png, jpg only)
                  </label>
                  <input
                    type="file"
                    name="date"
                    id="aadhaar_file"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-veryPaleRed text-right sm:px-6">
              <button value="" onClick={PostData}>
                <i
                 className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"
                >
                  Verify & Next
                </i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AadhaarVerification;
