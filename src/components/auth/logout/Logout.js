import React, { useEffect } from 'react';
import { logout } from '../../../redux/actions/auth';
import { Redirect, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const LogOut = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        localStorage.removeItem("token");
        dispatch(logout());
    });

    return (
        <Redirect to={{
            pathname: "/login",
            from: location
        }}/>
    )
        
};

export default LogOut;