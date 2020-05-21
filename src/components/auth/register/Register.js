import React from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../../redux/actions/admin';
import './Register.css';

class Register extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            user: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                gender: '',
                jobrole: '',
                department: '',
                address: '',
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this)

    }
    handleSubmit(e){
        e.preventDefault();
        this.props.registerUser(this.state.user)
    }

    handleOnChange(e){
        this.setState({user:{...this.state.user, [e.target.name]: e.target.value } });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name
                        <input type="text" className="form-control mb-2" name="firstname" onChange={this.handleOnChange}/>
                    </label>
                    <label>Last Name
                        <input type="text" className="form-control mb-2" name="lastname" onChange={this.handleOnChange}/>
                    </label>
                    <label>Email
                        <input type="email" className="form-control mb-2" name="email" onChange={this.handleOnChange}/>
                    </label>
                    <label>Gender
                        <input type="text" className="form-control mb-2" name="gender" onChange={this.handleOnChange}/>
                    </label>
                    <label>Job Role
                        <input type="text" className="form-control mb-2" name="jobrole" onChange={this.handleOnChange}/>
                    </label>
                    <label>Department
                        <input type="text" className="form-control mb-2" name="department" onChange={this.handleOnChange}/>
                    </label>
                    <label>Address
                        <input type="text" className="form-control mb-2" name="address" onChange={this.handleOnChange}/>
                    </label>
                    <label>Password
                        <input type="password" className="form-control mb-2" name="password" onChange={this.handleOnChange}/>
                    </label>
                    <label>Confirm Password
                        <input type="password" className="form-control mb-2" name="confirmpassword"/>
                    </label>
                    <button type="submit" className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {registerUser})(Register);