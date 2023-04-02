import React from 'react'

export default function InfoCard({ title, reverse , children }) {
  return (
    <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center md:px-8 lg:px-24`}>
      <div className='px-8 lg:px-12 py-8 lg:py-16 flex gap-4 items-center text-primary-dark bg-white 
              rounded-t-lg lg:rounded-lg border-2 border-primary-dark border-b-white lg:border-b-primary-dark'>
        {/* <span className="text-4xl lg:text-5xl mr-4 mb-2">🌴</span> */}
        <div className='uppercase text-2xl lg:text-2xl xl:text-3xl'>{ title }</div>
      </div>
      <div className={`h-1 w-32 from-primary-dark to-green-800
            ${reverse ? 'bg-gradient-to-l' : 'bg-gradient-to-r'}
            hidden lg:flex`} />
      <div className="flex flex-col justify-center 
              font-medium text-lg text-gray-700 rounded-b-lg lg:rounded-lg bg-white
              lg:border-2 lg:border-gray-700 p-6">
          { children }
      </div>
    </div>
  )
}