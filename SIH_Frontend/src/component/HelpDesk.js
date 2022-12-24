import React, { Component } from 'react'

export default class HelpDesk extends Component {
  render() {
    return (
     <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto ">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center bg-white rounded p-12 shadow-lg">
          <h1 className="title-font md:text-3xl text-2xl mb-4 font-medium text-gray-900">Help Desk</h1>
          <span className="inline-block h-1 w-10 rounded bg-brightRedLight mt-2 mb-6"></span>
          <p className="leading-relaxed text-lg text-gray-500">For any technical queries , please contact Helpdesk at <br/><strong className="hover:text-brightRedLight"><i class="fa fa-envelope-o"></i> helpdesk[at]nsp[dot]gov[dot]in </strong> or <br/><strong className="hover:text-brightRedLight"><i class="fa fa-phone"></i> 0120 - 6619540 </strong></p>
          <p className="text-brightRedLight mt-2">(from 8 AM to 8 PM on all days, excluding holidays)</p>
          </div>
          </div>
     </section>

    )
  }
}
