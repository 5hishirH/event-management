import React from 'react'
import ServiceCard from './ServiceCard'

const Services = ({serviceData}) => {
  return (
    <div className='mt-24 w-11/12 mx-auto mb-12'>
        <h2 className='text-4xl font-bold text-center mb-10'>Our Services</h2>
        <div className='w-full grid grid-cols-2 gap-8'>
            {
                serviceData?.map(card => <ServiceCard key={card.key} card={card}></ServiceCard>)
            }
        </div>
    </div>
  )
}

export default Services