import React from 'react'

const ServiceAlt = ({service}) => {
    const { id, title, details, img} = service || {};

  return (
    <div className='w-11/12 mx-auto mt-40'>
        <h2 className='text-4xl font-bold'>{title}</h2>
        <div className='w-full h-[70vh] overflow-hidden mt-10'>
            <img src={img} alt="" className='w-full h-full object-cover' />
        </div>
        <p className='font-medium mt-10'>{details}</p>
    </div>
  )
}

export default ServiceAlt