import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const { isAuthenticated } = useSelector(state => state.auth.user);
    return (
        <Route {...rest} render = {(props) =>(
            isAuthenticated
            ? <Component {...rest}/>
            : <Redirect to={{
                pathname: "/login",
                state: { from: props.location }
            }} 
            />
            )}
         />
    )
}
