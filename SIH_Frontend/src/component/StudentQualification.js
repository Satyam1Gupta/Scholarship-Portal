
import { useNavigate } from "react-router-dom";
import React,{useState} from "react";

export default function StudentQualification(){
  const [userdata,setUserdata]=useState(null)
  const navigate = useNavigate();
  const [user, setUser] = useState({
   name: "",
    tenth_board:"",
    tenth_year:"",
    tenth_cgpa:"",
    twelfth_board:"",
    twelfth_year:"",
    twelfth_cgpa:"",
  college_name:"",
  graduation_cgpa:"",
  app_number:"",
  ent_marks:"",
  country_name:"",
  ack_no:"",
  new_college:"",
 
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name,
      tenth_board,
      tenth_year,
      tenth_cgpa,
      twelfth_board,
      twelfth_year,
      twelfth_cgpa,
    college_name,
    graduation_cgpa,
    app_number,
    ent_marks,
    country_name,
    ack_no,
    new_college, } = user;
    let flag1=0,flag2=0,flag3=0;
if(tenth_board==="CBSE"){
 var tenth= await fetch('http://localhost:8000/api/cbse10')
       .then((response) => response.json())
       .then()}
else{
 var tenth= await fetch('http://localhost:8000/api/assam10')
       .then((response) => response.json())
       .then()}
      
       if(twelfth_board==="CBSE"){
 var twelfth= await fetch('http://localhost:8000/api/cbse12')
       .then((response) => response.json())
       .then()}
       else{
 var twelfth= await fetch('http://localhost:8000/api/assam12')
       .then((response) => response.json())
       .then()}
  var grad=await fetch('http://localhost:8000/api/college')
       .then((response) => response.json())
       .then()
      
       
       for (let i = 0; i < tenth.length; i++) {
       if( tenth[i].name===name &&tenth[i].year===tenth_year&&tenth[i].cgpa_percentage===tenth_cgpa){
           console.log("success10");
       //navigate("/scholarships/Family-Income");
          flag1=1;
      }
       }
      console.log(flag1);
       for (let i = 0; i < twelfth.length; i++) {
        if(twelfth[i].year===twelfth_year&&twelfth[i].cgpa_percentage===twelfth_cgpa ){
          console.log("success12");
        // navigate("/scholarships/Family-Income");
          flag2=1;
        }}
        console.log(flag2)
       for (let i = 0; i < grad.length; i++) {
        if( grad[i].college_name===college_name&&grad[i].grad_cgpa===graduation_cgpa ){
          console.log("success13");
        // navigate("/scholarships/Family-Income");
          flag3=1;
        }
      }
     if(flag1===1 && flag2===1 && flag3===1){
      navigate("/scholarships/Family-Income");
      //console.log("success15");
     }
    else{
      window.alert("Your credetials are not verified!"); }
      
  }
     
  return (
    <div className="registration-container max-w-[100vw] px-6 py-24 mx-auto flex flex-wrap items-center body-font">
      <div className="flex justify-center w-full mb-2">
        <div className="flex mx-auto flex-wrap mb-20">
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Aadhaar Verification
          </a>
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
              Student Qualification
            </h1>
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleInputs}
                    autoComplete="given-name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <h1 className="col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded">
                  HSLC Details
                </h1>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="10th_board"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>10th Board
                  </label>
                  <select
                    type="text"
                    name="tenth_board"
                    id="tenth_board"
                    value={user.tenth_board}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Select board</option>
                    <option>CBSE</option>
                    <option>HSLC</option>
                   
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="10th_passyr"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>10th Passing
                    Year
                  </label>
                  <select
                    type="text"
                    name="tenth_year"
                    id="tenth_year"
                    value={user.tenth_year}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Select Year</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="10th_mark"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>10th CGPA /
                    Percentage
                  </label>
                  <input
                    type="text"
                    name="tenth_cgpa"
                    id="tenth_cgpa"
                    value={user.tenth_cgpa}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="12th_marksheet"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Uplaod 10th
                    Marksheet
                  </label>
                  <input
                    type="file"
                    name="10th_marksheet"
                    id="10th_doc"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <h1 className="col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded">
                  HSSLC Details
                </h1>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="twelfth_board"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>12th Board
                  </label>
                  <select
                    type="text"
                    name="twelfth_board"
                    id="twelfth_board"
                    value={user.twelfth_board}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Select Board</option>
                    <option>CBSE</option>
                    <option>AHSEC</option>
                    
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="12th_passyr"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>12th Passing
                    Year
                  </label>
                  <select
                    type="text"
                    name="twelfth_year"
                    id="twelfth_year"
                    value={user.twelfth_year}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-ou" >
                    <option>Select Year</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="12th_mark"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>12th CGPA /
                    Percentage
                  </label>
                  <input
                    type="text"
                    name="twelfth_cgpa"
                    id="twelfth_cgpa"
                    value={user.twelfth_cgpa}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="12th_marksheet"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Uplaod 12th
                    Marksheet
                  </label>
                  <input
                    type="file"
                    name="12th_marksheet"
                    id="12th_doc"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <h1 className="col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded">
                  Graduation Details
                </h1>

                <div className="col-span-6 ">
                  <label
                    htmlFor="college_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Name of
                    College / University
                  </label>
                  <select
                    type="text"
                    name="college_name"
                    id="college_name"
                    value={user.college_name}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>College Name</option>
                    <option>Assam University</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="grad_mark"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Graduations'
                    CGPA / Percentage
                  </label>
                  <input
                    type="text"
                    name="graduation_cgpa"
                    id="graduation_cgpa"
                    value={user.graduation_cgpa}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="grad_marksheet"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Uplaod
                    Marksheet
                  </label>
                  <input
                    type="file"
                    name="grad_marksheet"
                    id="grad_marksheet"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <h1 className="col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded">
                  Masters Details
                </h1>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="app_num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Application
                    Number of Entrance Exam
                  </label>
                  <input
                    type="text"
                    name="app_number"
                    id="app_number"
                    value={user.graduation_cgpa}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="ent_marks"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Marks Scored
                  </label>
                  <input
                    type="text"
                    name="ent_marks"
                    id="ent_marks"
                    value={user.graduation_cgpa}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 md:col-span-3">
                  <label
                    htmlFor="country_name"
                    className="`block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Country of
                    newly alloted college
                  </label>
                  <select
                    name="country_name"
                    id="country_name"
                    value={user.country_name}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Country</option>
                    <option>Country</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="ack_no"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Acknowlegement
                    no of the newly alotted institute
                  </label>
                  <select
                    type="text"
                    name="ack_no"
                    id="ack_no"
                    value={user.ack_no}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Country</option>
                    <option>Country</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="new_college"
                    className="block text-sm font-medium text-gray-700"
                  >
                    <strong className="text-brightRed">* </strong>Acknowlegement
                    no of the newly alotted institute
                  </label>
                  <input
                    type="file"
                    name="new_college"
                    id="new_college"
                    value={user.new_college}
                    onChange={handleInputs}
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
