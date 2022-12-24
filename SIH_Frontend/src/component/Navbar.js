/* This example requires Tailwind CSS v2.0+ */
import {Link} from 'react-router-dom';
import { Fragment } from 'react'
import Hero from './Hero';
import React from 'react'
import Registration from './Registration';
import ContactUs from './ContactUs';
import HelpDesk from './HelpDesk';

import Faq from './Faq';

// Loign imports --
import IdRecovery from './IdRecovery';
import Login from './Login';
import RenewalLogin from './RenewalLogin';
import OfficerLogin from './OfficerLogin';
import RegistrationInstruction from './RegistrationInstruction';
import StudForgotPass from './StudForgotPass';
import StudOtpRec from './StudOtpRec';
import StudentResetPass from './StudentResetPass';

// Footer imports --
import Footer from './Footer';
import Copyright from './Copyright';
import Privacy from './Privacy';
import Disclaimer from './Disclaimer';
import Terms from './Terms';
import Hyperlink from './Hyperlink';
import SiteMap from './SiteMap';
// ----------------

import { Popover, Transition } from '@headlessui/react'
import {
  QuestionMarkCircleIcon,
  MailIcon,
  BookmarkAltIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

// React router DOM -----------
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from './About';
import Dashboard from './Dashboard';
import EmailVerification from './EmailVerification';




const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "/" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "/",
  },
  { id: 3, name: "Improve your customer experience", href: "/" },
];
const services = [
  {
    name: 'New Registration',
    href: '/RegistrationInstruction',
  },
  { name: 'Renewal Application',
    href: '/renewal/Login', 
  },
  { name: 'Student DashBoard',
    href: '/About', 
  }
]
const NavMenu = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/About',
  },
  {
    name: 'Officer Login',
    href: '/OfficerLogin',
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '/', icon: PlayIcon },
  { name: 'Contact Us', href: '/ContactUs', icon: MailIcon },
]
const resources = [
  {
    name: 'Help Desk',
    href: '/HelpDesk',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    href: '/',
    icon: BookmarkAltIcon,
  },
  {
    name: 'FAQs',
    href: '/Faq',
    icon: QuestionMarkCircleIcon,
  },
  { name: 'Security',
    href: '/',
    icon: ShieldCheckIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="main-container ">
    {/* <Router> */}
    <div className="nav-container z-100">
    <Popover className="relative ">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="hidden justify-start md:flex lg:hidden lg:w-0 lg:flex-1">
            <Link className="flex flex-row justify-center items-center " to="/">
              <img
                className="w-auto rounded-lg md:h-12"
                src="./ashok-logo.png"
                alt=""
              />
              <div className="flex flex-col text-xs ml-3 md:ml-2 md:mt-2">
                <span className="text-gray-900 font-bold">Department of Social Justice & Empowerment</span>
                <span className="text-gray-500 ">Ministry of Social Work and Empowerment</span>
                <span className="text-gray-500 ">Government of India</span>
              </div>
            </Link>
          </div>
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:py-2 lg:py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start md:hidden lg:flex lg:w-0 lg:flex-1">
            <Link className="flex flex-row justify-center items-center md:flex-col md:items-start lg:flex-row lg:items-center lg:i" to="/">
              <img
                className="h-[4rem] w-auto rounded-lg sm:h-20 md:h-10 lg:h-16"
                src="./ashok-logo.png"
                alt=""
              />
              <div className="flex flex-col text-xs ml-3 md:ml-2 md:mt-2">
                <span className="text-gray-900 font-bold">Department of Social Justice & Empowerment</span>
                <span className="text-gray-500 ">Ministry of Social Work and Empowerment</span>
                <span className="text-gray-500 ">Government of India</span>
              </div>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden md:-mr-0 lg:-mr-2">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brightRedLight active:shadow-lg transition duration-30 ease-in-out">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-6">
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link to="/About" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About us
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-brightRedLight'
                    )}
                  >
                    <span>Services</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {services.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-brightRedSupLight"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <Link
                                to={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-brightRed" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group  rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-brightRedLight'
                    )}
                  >
                    <span>Docs</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-brightRed" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          <Link to="/OfficerLogin" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Officer Login
          </Link>
          </Popover.Group>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">  
            <Link to="/Login" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-brightRed hover:bg-brightRedLight"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="sm-menu absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div  className="flex h-8 w-auto">
                  <img
                    className="h-8 w-auto"
                    src="./ashok-logo.png"
                    alt="Workflow"
                  />
                <span className="ml-2 text-gray-900 font-bold">Department of Social Justice & Empowerment</span>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brightRedLight active:shadow-lg transition duration-30 ease-in-out">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {NavMenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 bg-veryPaleRed">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </Link>

                <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </Link>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
                <Link
                  to="/Login"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brightRed hover:bg-brightRedLight active:shadow-lg transition duration-30 ease-in-out"
                >
                  Login
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  New Student?{' '}
                  <Link to="/RegistrationInstruction" className="text-brightRed hover:text-brightRedLight">
                    Register Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </div>


{/* ---------- Routes -------------- */}
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/HelpDesk" element={<HelpDesk/>}/>
      <Route path="/DashBoard" element={<Dashboard/>}/>

      {/* Login Routes */}
      <Route path="/Login" element={<Login/>}/>
      <Route path="/renewal/Login" element={<RenewalLogin/>}/>
      <Route path="/OfficerLogin" element={<OfficerLogin/>}/>  
      <Route path="/Id-Recovery" element={<IdRecovery/>}/>  
      <Route path="/StudForgotPass" element={<StudForgotPass/>}/>  
      <Route path="/StudentOtpRec" element={<StudOtpRec/>}/>  
      <Route path="/StudentResetPass" element={<StudentResetPass/>}/>  

      <Route path="/Faq" element={<Faq/>}/>  
      <Route path="/RegistrationInstruction" element={<RegistrationInstruction/>}/>  
      <Route path="/EmailVerification" element={<EmailVerification/>}/>  


      {/* Footer Routes */}
      <Route path="/Terms" element={<Terms/>}/>
      <Route path="/Privacy" element={<Privacy/>}/>
      <Route path="/Disclaimer" element={<Disclaimer/>}/>
      <Route path="/Copyright" element={<Copyright/>}/>
      <Route path="/Hyperlink" element={<Hyperlink/>}/>
      <Route path="/SiteMap" element={<SiteMap/>}/>
    </Routes>
  {/* </Router> */}

     <Footer/>

  </div>
  )
}
