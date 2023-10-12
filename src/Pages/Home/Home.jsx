import React, { useContext } from 'react'
import Banner from '../../Components/Header/Banner'
import { useLoaderData } from 'react-router-dom'
import Services from '../../Components/Services/Services';
import FrequentQ from '../../Components/FrequentQ'
import Contact from '../../Components/Contact';

const Home = () => {
  const {record} = useLoaderData()
  const serviceData = record;

  return (
    <div>
      <Banner></Banner>
      <Services serviceData={serviceData}></Services>
      <FrequentQ></FrequentQ>
      <Contact></Contact>
    </div>
  )
}

export default Home