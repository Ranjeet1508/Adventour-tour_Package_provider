import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const isAuth = useSelector((data) => data.isAuth);
    
    if(!isAuth){
        return <Navigate to='/login' />
    }
    else{
        return children
    }  
}

export default PrivateRoute
