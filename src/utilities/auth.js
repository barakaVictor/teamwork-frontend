import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
/**
 *  
 * @param {*} Object - The children that this component takes in.
 * 
 * A High Order Component to manage tha auth token on the client side.
 * Its main purpose is to determine when a token expires and automatically 
 * logout a user when the time period expires.
 */
export const SessionManager = ({children}) => {

    const history = useHistory();
    const {user: {token}} = useSelector((state) => state.auth)

    useEffect(()=> {
        let sessionTimer
        if(token){
            const {exp} = JSON.parse(atob(token.split(".")[1]))
            const validPeriod =  ((exp * 1000) - (Date.now()))             
            sessionTimer = setTimeout(() => {
                history.push('/logout')
            }, validPeriod)
        }
        return () => clearTimeout(sessionTimer)
    }, [history, token])
   
    return (
        <>
            {children}
        </>
    )
}