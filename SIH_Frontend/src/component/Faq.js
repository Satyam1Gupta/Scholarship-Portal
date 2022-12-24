import React, { Component } from 'react'


const Faqs = [
  {
    no:1,
    question:'How to apply for Scholarship?',
    answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores esse, amet aliquam molestiae reprehenderit voluptatum ratione illum dolorem? Numquam, sunt quod? Provident amet maxime, autem neque obcaecati suscipit cumque minus similique, possimus a architecto minima harum nobis ut cupiditate illum aliquid, natus eligendi hic totam dicta tempore. Sit, rem beatae?'
  },
  {
    no:2,
    question:'How to apply for Scholarship?',
    answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores esse, amet aliquam molestiae reprehenderit voluptatum ratione illum dolorem? Numquam, sunt quod? Provident amet maxime, autem neque obcaecati suscipit cumque minus similique, possimus a architecto minima harum nobis ut cupiditate illum aliquid, natus eligendi hic totam dicta tempore. Sit, rem beatae?'
  },
  {
    no:3,
    question:'How to apply for Scholarship?',
    answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores esse, amet aliquam molestiae reprehenderit voluptatum ratione illum dolorem? Numquam, sunt quod? Provident amet maxime, autem neque obcaecati suscipit cumque minus similique, possimus a architecto minima harum nobis ut cupiditate illum aliquid, natus eligendi hic totam dicta tempore. Sit, rem beatae?'
  },
  {
    no:4,
    question:'How to apply for Scholarship?',
    answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores esse, amet aliquam molestiae reprehenderit voluptatum ratione illum dolorem? Numquam, sunt quod? Provident amet maxime, autem neque obcaecati suscipit cumque minus similique, possimus a architecto minima harum nobis ut cupiditate illum aliquid, natus eligendi hic totam dicta tempore. Sit, rem beatae?'
  }
]
export default class Faq extends Component {
  render() {
    return (
        <div className='Faq-container'>
          <div className="py-12 px-12 flex-col justify-center">
            <div className="my-12 text-center">
              <h1 className="title-font font-medium text-3xl text-gray-900">Frequently Asked Question</h1>
              <p className="leading-relaxed mt-4 text-gray-500">These are some of the frequently asked questions</p>
            </div>

            <div className='flex justify-center'>
            <div class="accordion shadow-lg md:w-3/4 lg:w-1/2 " id="accordionExample5">
            <div class="accordion-item bg-white border border-gray-200">
            {
              Faqs.map((items)=>(                                         
              <>
              <h2 class="accordion-header mb-0" id={`heading${items.no}`}>
                <button class="
                  accordion-button
                  collapsed
                  -z-2
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
                    type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${items.no}`} aria-expanded="true"
                  aria-controls={`collapse${items.no}`}>
                  <strong>
                    {items.question}
                  </strong>
                </button>
              </h2>
              <div id={`collapse${items.no}`} class="accordion-collapse collapse" aria-labelledby={`heading${items.no}`}>
                <div class="accordion-body py-4 px-5">
                  {items.answer}
                </div>
              </div>
              </>
              ))
            }
            </div>
            </div>
          </div>
          </div>
        </div>

    )
  }
}
