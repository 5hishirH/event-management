import React, { useContext } from 'react'
import Banner from '../../Components/Header/Banner'
import { useLoaderData } from 'react-router-dom'
import Services from '../../Components/Services/Services';
import { AuthContext } from '../../Providers/AuthProvider';
import FrequentQ from '../../Components/FrequentQ'

const Home = () => {
  const {eventData} = useContext(AuthContext);

  return (
    <div>
      <Banner></Banner>
      <Services serviceData={eventData}></Services>
      <FrequentQ></FrequentQ>
    </div>
  )
}

export default Home