import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';


export default function PrivateRoute({children}) {
    const {user} = useAuth();
    const location = useLocation()
    if(!user){
        return <Navigate to='/auth/login' state={{
            return_url: location.pathname
        }}/>
    }
    else{
        return children
    }

}
