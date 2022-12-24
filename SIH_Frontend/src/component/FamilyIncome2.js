

import React from "react";
import { Link } from "react-router-dom";

export default function FamilyIncome() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    father_name: "",
    mothers_name: "",
    mother_job: "",
    father_pan: "",
    father_job: "",
    father_occcupation: "",
    mother_pan: "",
    spouse_name: "",
    sibling_l_18: "",
    sibling_g_18: "",
    annual_family_income: "",
    pan_spouse: "",
    name_sibling: "",
    sib_gender: "",
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
      father_name,
      mothers_name,
      mother_job,
      father_pan,
      father_job,
      father_occcupation,
      mother_pan,
      spouse_name,
      sibling_l_18,
      sibling_g_18,
      annual_family_income,
      pan_spouse,
      name_sibling,
      sib_gender,
    } = user;

    await fetch("http://localhost:8000/api/aadhaar")
      .then((response) => response.json())
      .then((data) => setUserdata(data));
    console.log(userdata[0]);
    console.log(dob);
    //console.log(toString(dob))
    let flag = 0;
    for (let i = 0; i < userdata.length; i++) {
      if (
        userdata[i].father_name === father_name &&
        userdata[i].mothers_name === mothers_name &&
        userdata[i].mother_job === mother_job &&
        userdata[i].father_pan === father_pan &&
        userdata[i].father_job == father_job &&
        userdata[i].father_occcupation=== father_occcupation&&
        userdata[i].mother_pan == mother_pan &&
        userdata[i].aspouse_name === spouse_name &&
        userdata[i].sibling_l_18== sibling_l_18 &&
        userdata[i].sibling_g_18 === sibling_g_18 &&
        userdata[i]. annual_family_income ==  annual_family_income &&
        userdata[i].pan_spouse === pan_spouse&&
        userdata[i].name_sibling== name_sibling&&
        userdata[i].sib_gender === sib_gender
       
      ) {
        console.log("success");
        navigate("/scholarships/Student-Qualification");
        flag = 1;
      }
    }
    if (flag === 0) window.alert("Your credentials are not verified");
  };

  // const res = await fetch("/Registration", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     father_name,
  //     mothers_name,
  //     mother_job,
  //     father_pan,
  //     father_job,
  //     father_occcupation,
  //     mother_pan,
  //     spouse_name,
  //     sibling_l_18,
  //     sibling_g_18,
  //     annual_family_income,
  //     pan_spouse,
  //     name_sibling,
  //     sib_gender
  //   }),
  // });

  //   const data = await res.json();

  //   // if(!first_name || !last_name||!phone_number||!email){
  //   //   window.alert("all the fields are mandatory");
  //   // }
  //   if (res.status === 409) {
  //     window.alert("User/email is existed");
  //   } else if (res.status === 422 || res.status === 500 || !data) {
  //     window.alert("All fields are mandatory/data is not recognise");
  //     console.log("Invalid Registration");
  //   } else {
  //     window.alert(" Registration Succesfull");
  //     console.log("Successful Registration");
  //     console.log(res.status);

  //     navigate("/Login");
  //   }
  // };

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
              Famly Income Verification
            </h1>
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="father_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Father'<q></q>s name
                  </label>
                  <input
                    type="text"
                    name="father_name"
                    id="father_name"
                    value={user.father_name}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="father_job"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Occupation
                  </label>
                  <select
                    type="tel"
                    name="father_job"
                    id="father_job"
                    value={user.father_job}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Occupation</option>
                    <option>Occupation</option>
                    <option>Occupation</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="father_pan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PAN Number (Father)
                  </label>
                  <input
                    type="tel"
                    name="father_pan"
                    id="father_pan"
                    value={user.father_pan}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="mother_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mothers name
                  </label>
                  <input
                    type="text"
                    name="mother_name"
                    id="mother_name"
                    value={user.mther_name}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="father_job"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Occupation
                  </label>
                  <select
                    type="tel"
                    name="mother_job"
                    id="mother_job"
                    value={user.father_job}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Occupation</option>
                    <option>Occupation</option>
                    <option>Occupation</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label
                    htmlFor="mother_pan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PAN Number (Mother)
                  </label>
                  <input
                    type="tel"
                    name="mother_pan"
                    id="mother_pan"
                    value={user.mother_pan}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mother_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Spouse name (if any)
                  </label>
                  <input
                    type="text"
                    name="spouse_name"
                    id="spouse_name"
                    value={user.spouse_name}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  +
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mother_pan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PAN Number (Spouse)
                  </label>
                  <input
                    type="tel"
                    name="pan_spouse"
                    id="pan_spouse"
                    value={user.pan_spouse}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 md:col-span-3">
                  <label
                    htmlFor="Phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    No of siblings (Age {`>`} 18)
                  </label>
                  <input
                    type="text"
                    name=" sibling_l_18"
                    id=" sibling_l_18"
                    value={user.sibling_l_18}
                    onChange={handleInputs}
                    autoComplete="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 md:col-span-3">
                  <label
                    htmlFor="Phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    No of siblings (Age {`<`} 18)
                  </label>
                  <input
                    type="text"
                    name=" sibling_l_18"
                    id=" sibling_l_18"
                    value={user.sibling_l_18}
                    onChange={handleInputs}
                    autoComplete="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="row">
                  <div className="col-span-6 md:col-span-2">
                    <label
                      htmlFor="sib1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name of sibling{" "}
                    </label>
                    <input
                      type="text"
                      name="sib_name"
                      id="sib_name"
                      value={user.sib_name}
                      onChange={handleInputs}
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-1">
                    <label
                      htmlFor="sib1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <select
                      type="text"
                      name="sex"
                      id="sib_gender"
                      value={user.sib_gender}
                      onChange={handleInputs}
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-span-6 md:col-span-1">
                    <label
                      htmlFor="sib1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      name="sib1"
                      id="age1"
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="col-span-6 md:col-span-2">
                    <label
                      htmlFor="sib1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Birth Proof
                    </label>
                    <input
                      type="file"
                      name="sib1"
                      id="file1"
                      className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div id="new-input"></div>

                <button id="add-row">ADD</button>
                <button id="delete-row">DELETE</button>
                {/* 
               {
                    $("add-row").click(function(){
                         newRowAdd = 
                         '<div className="col-span-6 md:col-span-2">'+
                              '<label htmlFor="sib1" className="block text-sm font-medium text-gray-700">Name of sibling </label>'+
                              '<input type="text" name="sib1" id="sib1"  className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/></div>'+  
                         '<div className="col-span-6 md:col-span-1">'+
                              '<label htmlFor="sib1" className="block text-sm font-medium text-gray-700">Gender</label>'+
                              '<select type="text" name="sex" id="gender1" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">'+
                              '<option>Female</option>'+
                              '<option>Male</option>'+
                              '<option>Other</option></select></div>'+
                         '<div className="col-span-6 md:col-span-1">'+
                              '<label htmlFor="sib1" className="block text-sm font-medium text-gray-700">Age</label>'+
                              '<input type="number" name="sib1" id="age1" className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/></div>'+
                         '<div className="col-span-6 md:col-span-2">'+
                              '<label htmlFor="sib1" className="block text-sm font-medium text-gray-700">Birth Proof</label>'+
                              '<input type="file" name="sib1" id="file1"  className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/></div>'+
                         $('#new-input').append(newRowAdd);  
                    });
                    
                    $("body").on("click", "#delete-row", function () {
                         $(this).parents("#row").remove();
                    })
               } */}

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="total-income"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Annual Family Income
                  </label>
                  <input
                    type="text"
                    name="annual_family_income"
                    id="annual_family_income"
                    value={user.annual_family_income}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="income-cert"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Income Certificate
                  </label>
                  <input
                    type="file"
                    name="total-cert"
                    id="total-cert"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-veryPaleRed text-right sm:px-6">
              <Link
                onClick={() => {
                  PostData;
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                to="/scholarships/ITR-Verification"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"
              >
                Next
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
