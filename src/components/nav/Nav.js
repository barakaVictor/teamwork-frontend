import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Enforce from '../auth/police/Police';
import './Nav.css';

class Nav extends React.Component{
    render(){
        return(
            <nav className="bg-primary">
                <div className="nav-items">
                    <ul>
                        {this.props.user.isAuthenticated &&
                        <>
                            <Link to="/feed"><li>Feed</li></Link>
                            <Link to="/gifs/post"><li>Post Gif</li></Link>
                            <Link to="/articles/post"><li>Post an Article</li></Link>
                            <Enforce 
                                role={this.props.user.role}
                                perform = "user:add"
                                yes = {() => (
                                    <Link to="/create-user"><li>Add User</li></Link>
                                )}
                                />
                            <Link to="/account"><li>Account</li></Link>
                            <Link to="/logout"><li>logout</li></Link>
                        </>
                        }
                        { !this.props.user.isAuthenticated &&
                            <Link to="/login"><li>login</li></Link>
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    const {user} = state.auth;
    return {user}
}

export default connect(mapStateToProps)(Nav);
