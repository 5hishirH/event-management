import React from 'react'
import Banner from '../../Components/Header/Banner'
import { useLoaderData } from 'react-router-dom'
import Services from '../../Components/Services/Services';

const Home = () => {
  const serviceData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Services serviceData={serviceData}></Services>
    </div>
  )
}

export default Home