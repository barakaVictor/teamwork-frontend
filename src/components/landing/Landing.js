import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

class Landing extends React.Component{
    render(){
        return(
            <div className="container landing-wrapper">
                <div className="hero-content col-md-7">
                    <h1>Welcome to teamwork</h1>
                    <Link to="/login">
                        <button className="btn btn-primary">Get Started</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Landing;
