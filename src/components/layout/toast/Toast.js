import React from 'react';
import './Toast.css';
import { useSelector, useDispatch } from 'react-redux';
import {clearNotification} from '../../../redux/actions/notication-actions';

const Toast = () => {
    const dispatch = useDispatch();
    const {notifications} = useSelector((state) => state)
    const dismiss = (index) => {
        dispatch(clearNotification(index));
    }
    return(
        <div className={`toast-wrapper bottom-right`}> 
        {
            notifications.length > 0 &&
            notifications.map((notification, index) =>
            <div className={`toast ${notification.status}`} key={index}>
                <div className="toast-header">
                    <button className="dismiss-toast" onClick={() => dismiss(index)}>x</button>
                    <span className="toast-title">{notification.status}</span>
                </div>
                <div className="toast-body">{notification.message}</div>
            </div>
            )
        }
        </div>
    )
}

export default Toast;