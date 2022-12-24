import React, { Component } from 'react'
import {
  UserIcon,
  UsersIcon,
  UserCircleIcon,
} from '@heroicons/react/outline'
import Updates from './Updates'


export class Hero extends Component {
  
  render() {
    return (
<>
        <section className="hero-section  text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-8 md:py-12 items-center justify-center flex-col">
            {/* <img className="lg:w-1/2 lg:h-72 md:w-2/3 md:h-60 w-5/6 h-56 mb-6 md:m-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
      
      
          <div className="mb-6 md:mb-10 z-0">
          <div id="carouselExampleCaptions " className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div
              className="carousel-indicators  right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
            >
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner  w-full overflow-hidden">
              <div className="carousel-item active  float-left w-full">
                <video className="w-full" autoPlay loop muted>
                  <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
                </video>
                <div className="carousel-caption hidden md:block text-center">
                  <h5 className="text-xl">First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item  float-left w-full">
                <video className="w-full" autoPlay loop muted>
                  <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
                </video>
                <div className="carousel-caption hidden md:block  text-center">
                  <h5 className="text-xl">Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item  float-left w-full">
                <video className="w-full" autoPlay loop muted>
                  <source src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4" type="video/mp4" />
                </video>
                <div className="carousel-caption hidden md:block  text-center">
                  <h5 className="text-xl">Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev  top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next  top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>


            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font md:text-3xl text-2xl mb-2 font-medium text-gray-900">National Scholarship Portal</h1>
              <p className="mb-2 leading-relaxed text-lg">(Ministry of Information and Technology)</p>
              <p className='mb-12'><strong className="leading-relaxed text-lg">(For the Academic Year 2022-23)</strong></p>
              <div className="flex justify-center flex-wrap">
                <a href="/RegistrationInstruction" className="inline-flex text-white bg-brightRed border-0 py-2 px-6 focus:outline-none active:bg-brightRedLight rounded text-lg mx-2 my-1 md:my-0 hover:shadow-lg transition duration-30 ease-in-out"><UserIcon className="h-6 w-6 mx-1" aria-hidden="true" />New Registration</a>
                <a href="/Login" className="inline-flex text-white bg-brightRed border-0 py-2 px-6 focus:outline-none active:bg-brightRedLight rounded text-lg mx-2 my-1 md:my-0 hover:shadow-lg transition duration-30 ease-in-out"><UsersIcon className="h-6 w-6 mx-1" aria-hidden="true" />Apply Fresh</a>
                <a href="/renewal/Login" className="inline-flex text-white bg-brightRed border-0 py-2 px-6 focus:outline-none active:bg-brightRedLight rounded text-lg mx-2 my-1 md:my-0 hover:shadow-lg transition duration-30 ease-in-out"><UserCircleIcon className="h-6 w-6 mx-1" aria-hidden="true" />Apply Renewal</a>
              </div>
            </div>
          </div>
        </section>
        <Updates/>

</>
    )
  }
}

export default Hero