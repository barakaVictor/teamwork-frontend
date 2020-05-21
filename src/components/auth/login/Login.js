import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import Spinner from '../../layout/spinner/Spinner';
import './Login.css';

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            userCredentials:{
                email: '',
                password: ''
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate(){
        if (this.props.auth.user.isAuthenticated) {
            this.props.history.push('/feed')
          }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state.userCredentials)
    }

    render(){
        return(
            <div className="login-form-wrapper">
                <div className="login-form-holder">
                {
                    this.props.auth.user.authenticating
                    ?<Spinner message="Logging in....."/>
                    :<>
                        <form className="login-form" onSubmit={this.handleSubmit}>
                        <h3>Sign In</h3>
                            <input 
                                type="email" 
                                className="email-input form-control mb-2" 
                                placeholder="jhondoe@example.com"
                                value = {this.state.userCredentials.email}
                                onChange = {(e) => {this.setState({userCredentials: {
                                    ...this.state.userCredentials, email: e.target.value
                                    }})}} />
                            <input 
                                type="password" 
                                className="password-input form-control mb-2"
                                value = {this.state.userCredentials.password}
                                onChange = {(e) => {this.setState({userCredentials: {
                                    ...this.state.userCredentials, password: e.target.value
                                    }})}}
                                />
                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </form>
                    </>
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {auth} = state
    return {auth}
}

export default connect(
    mapStateToProps, 
    {
        login,
    })(Login)
