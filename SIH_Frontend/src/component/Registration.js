

import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const Registration = () => {

 
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    phone_otp: "",
    email: "",
    email_otp: "",
    dob: "",
    gender: "",
    country: "",
    category: "",
    id_name: "",
    id_no: "",
    ac_no: "",
    ifsc_no: "",
    street_address: "",
    city: "",
    state: "",
    postal_code: "",
    password:"",
    cpassword:"",
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
      phone_number,
      phone_otp,
      email,
      email_otp,
      dob,
      gender,
      country,
      category,
      id_name,
      id_no,
      ac_no,
      ifsc_no,
      street_address,
      city,
      state,
      postal_code,
      password,cpassword
    } = user;
    const res = await fetch("/Registration", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name,
        last_name,
        phone_number,
        phone_otp,
        email,
        email_otp,
        dob,
        gender,
        country,
        category,
        id_name,
        id_no,
        ac_no,
        ifsc_no,
        street_address,
        city,
        state,
        postal_code,
        password,
        cpassword
      }),
    });

    const data = await res.json();

    // if(!first_name || !last_name||!phone_number||!email){
    //   window.alert("all the fields are mandatory");
    // }
    if(res.status===409){
      window.alert("User/email is existed");
    }
    else if (res.status === 422 || res.status === 500 ||!data) {
      window.alert("All fields are mandatory/data is not recognise");
      console.log("Invalid Registration");
    } 
    else {
      window.alert(" Registration Succesfull");
      console.log("Successful Registration");
      console.log(res.status);

      navigate("/Login");
    }
  };

  return (
    <div className="registration-container max-w-[100vw] px-6 py-24 mx-auto flex flex-wrap items-center body-font">
      <div className="flex justify-center items-center form-container w-full">
         
                
                
        <form
          className="w-full md:w-3/4 lg:w-1/2 bg-transparent "
           
          method="POST"
        >
          <div className="shadow overflow-hidden sm:rounded-md">
            <h1 className="bg-white text-3xl w-full text-center text-gray-900 py-6 rounded">
              Student Registration form
            </h1>
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <h1 className="col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded">
                  Personal Details
                </h1>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
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
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    value={user.last_name}
                    onChange={handleInputs}
                    autoComplete="family-name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4" id="phone-form">
                  <label
                    htmlFor="Phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    id="phone-number-input"
                    value={user.phone_number}
                    onChange={handleInputs}
                    autoComplete="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                 
                </div>
                <div className="col-span-2 sm:col-span-2"id="verify-form">
                  <label
                    htmlFor="Phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    name="phone_otp"
                    id="otp-input"
                    value={user.phone_otp}
                    onChange={handleInputs}
                    autoComplete="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                 
                </div>
                <div id="response-text"></div>
                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="Phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    autoComplete="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-2 sm:col-span-2">
                  <label
                    htmlFor="Phone_number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    name="email_otp"
                    id="email_otp"
                    value={user.email_otp}
                    onChange={handleInputs}
                    autoComplete="number"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                   Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInputs}
                    autoComplete="given-name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                   Confirm Password
                  </label>
                  <input
                    type="text"
                    name="cpassword"
                    id="cpassword"
                    value={user.cpassword}
                    onChange={handleInputs}
                    autoComplete="given-name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
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
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={user.gender}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country / Region
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={user.country}
                    onChange={handleInputs}
                    autoComplete="country"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={user.category}
                    onChange={handleInputs}
                    autoComplete="category"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option>General</option>
                    <option>OBC</option>
                    <option>Scheduled Caste (SC)</option>
                    <option>Scheduled Tribes (ST)</option>
                  </select>
                </div>

                <h1 className="col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded">
                  Indeficartion Details
                </h1>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Choose Id
                  </label>
                  <select
                    id="id_name"
                    name="id_name"
                    value={user.id_name}
                    onChange={handleInputs}
                    autoComplete="category"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option value="default">Select an Option</option>
                    <option value="Aadhaar">Aadhaar</option>
                    <option>PAN</option>
                    <option>Driving Licesence</option>
                    <option>Voter Card</option>
                    <option>Passport</option>
                  </select>
                </div>

                <div id="id_no" className="col-span-6 sm:col-span-3 ">
                  <label
                    htmlFor="id_no"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Unique Identification Number
                  </label>
                  <input
                    type="text"
                    name="id_no"
                    value={user.id_no}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <h1 className="col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded">
                  Bank Details
                </h1>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="acc_no"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bank A/C Number
                  </label>
                  <input
                    type="text"
                    name="ac_no"
                    id="ac_no"
                    value={user.ac_no}
                    onChange={handleInputs}
                    autoComplete="family-name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="ifsc_no"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bank IFSC Number
                  </label>
                  <input
                    type="text"
                    name="ifsc_no"
                    id="ifsc_no"
                    value={user.ifsc_no}
                    onChange={handleInputs}
                    autoComplete="family-name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <h1 className="col-span-6 bg-white text-lg w-full text-center text-gray-500 py-6 rounded">
                  Residential Address
                </h1>

                <div className="col-span-6">
                  <label
                    htmlFor="street_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <input
                    type="text"
                    name="street_address"
                    id="street_address"
                    value={user.street_address}
                    onChange={handleInputs}
                    autoComplete="street-address"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={user.city}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={user.state}
                    onChange={handleInputs}
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="postal_code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal
                  </label>
                  <input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    value={user.postal_code}
                    onChange={handleInputs}
                    autoComplete="postal-code"
                    className="w-full bg-white rounded border border-gray-300 focus:border-brightRedLight focus:ring-2 focus:ring-brightRedLight text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-veryPaleRed text-right sm:px-6">
              <div
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"
                
              >
                <input type="submit"value="Register" onClick={PostData} />
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
