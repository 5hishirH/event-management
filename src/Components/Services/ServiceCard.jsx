import React from 'react'

const ServiceCard = ({card}) => {
  return (
    <div className="w-full rounded-md overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex">
        <div className="w-[45%] h-60 overflow-hidden">
            <img src={card.img} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="px-5 pt-5 pb-6 w-[55%] h-full flex flex-col justify-between">
            <div className=''>
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className='text-sm font-light'>{card.info}</p>
            </div>
            <button className='bg-purple-500 w-fit text-white font-medium rounded px-4 py-2'>View details</button>
        </div>
    </div>
  )
}

export default ServiceCard