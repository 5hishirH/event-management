import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceAlt from '../../Components/Services/ServiceAlt';
import { AuthContext } from '../../Providers/AuthProvider';

const ServiceDetail = () => {
  const [service, setService] = useState({});
  const {id} = useParams();
  const { eventData } = useContext(AuthContext)
  useEffect(() => {
    const findService = eventData?.find((e) => e.id == id);
    setService(findService)
  }, [id, eventData]);

  return (
    <div>
      <ServiceAlt service={service}></ServiceAlt>
    </div>
  )
}

export default ServiceDetail