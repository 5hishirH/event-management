import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceAlt from '../../Components/Services/ServiceAlt';
import { AuthContext } from '../../Providers/AuthProvider';

const ServiceDetail = () => {
  const [service, setService] = useState({});
  const {id} = useParams();

  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const dataLoader = async () => {
      const res = await fetch("https://api.jsonbin.io/v3/b/6527c84954105e766fc14958");
      const data = await res.json();
      setEventData(data.record);
    }
    
    dataLoader();

  }, [])


  useEffect(() => {
    const findService = eventData?.find((e) => e.id == id);
    setService(findService)
  }, [id, eventData]);

  // console.log(service);

  return (
    <div>
      <ServiceAlt service={service}></ServiceAlt>
    </div>
  )
}

export default ServiceDetail