import React from 'react'
import FAQ from './ui/FAQ'

const FAQWedget = () => {
  return (
    <div className="relative mt-16">
          <h2 className="text-[22px] md:!text-[32px] leading-8 md:!leading-10 font-bold text-center md:!text-left w-full md:!w-auto text-gray-900 pb-6">Frequently Asked Questions</h2>
          <div>
            <FAQ
              question="Who are these courses suitable for?"
              answer="All of our program are designed to suit the need of all candidates."
            />
            <FAQ
              question="Who are these courses suitable for?"
              answer="All of our program are designed to suit the need of all candidates."
            />
            <FAQ
              question="Who are these courses suitable for?"
              answer="All of our program are designed to suit the need of all candidates."
            />
            <FAQ
              question="Who are these courses suitable for?"
              answer="All of our program are designed to suit the need of all candidates."
            />
          </div>
        </div>
  )
}

export default FAQWedget