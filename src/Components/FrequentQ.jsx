import React from 'react'

const FrequentQ = () => {
  return (
    <div className='w-11/12 mx-auto mt-40'>
        <h2 className='text-4xl text-center font-bold text-purple-700'>Frequently Asked Questions</h2>
        <div className='pl-4 mt-6'>
            <ol className='list-decimal'>
                <li>
                    <h3 className='text-xl font-bold mt-4'>What does a social event management service provider do?</h3>
                    <p>
                    We specialize in planning, organizing, and executing social events such as weddings, parties, conferences, and fundraisers. We handle everything from venue selection and budgeting to catering, entertainment, and logistics.
                    </p>
                </li>
                <li>
                    <h3 className='text-xl font-bold  mt-4'>Why should I hire a professional event manager?</h3>
                    <p>Our expertise ensures that your event runs smoothly, allowing you to relax and enjoy the moment. We have the experience to handle all the details and unexpected challenges, making your event stress-free.</p>
                </li>
                <li>
                    <h3 className='text-xl font-bold  mt-4'>How can I get started with your services?</h3>
                    <p>Simply reach out to us via phone or email, and we'll schedule a consultation to discuss your event's goals, requirements, and budget. From there, we'll create a customized plan for your event.</p>
                </li>
                <li>
                    <h3 className='text-xl font-bold  mt-4'>Do you only work with large events, or can you handle smaller gatherings too?</h3>
                    <p>We cater to events of all sizes. Whether you're planning an intimate gathering or a large-scale celebration, we have the expertise to make it a success.</p>
                </li>
                <li>
                    <h3 className='text-xl font-bold mt-4'>Can you help with event design and theme selection?</h3>
                    <p>Absolutely! We offer creative event design services to help you choose themes, colors, and decor that match your vision and preferences.</p>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default FrequentQ