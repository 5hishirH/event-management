import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { loading, user } = useContext(AuthContext);
    if(loading) {
        return (
            <div></div>
        )
    }
    else if(user) {
        return children
    }
    else {
        return <Navigate to={'/login'}></Navigate>
    }
}

export default PrivateRoute