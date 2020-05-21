import React from 'react';
import Feed from '../components/feed/Feed';
import Login from "../components/auth/login/Login";
import Landing from '../components/landing/Landing';
import Register from '../components/auth/register/Register';
import Logout from '../components/auth/logout/Logout';
import AddGif from '../components/gif/addgif/AddGif'
import CreateArticle from '../components/article/createarticle/CreateArticle';
import Nav from '../components/nav/Nav';
import SinglePost from '../components/singlepost/SinglePost';
import Toast from '../components/layout/toast/Toast';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ProtectedRoute } from './helpers/protectedroute';
import { SessionManager } from '../utilities/auth'

export const Router = () => {
    return(
        <BrowserRouter>
            <SessionManager>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                    <ProtectedRoute path="/feed" exact component={Feed}/>
                    <ProtectedRoute path="/create-user" component={Register}/>
                    <ProtectedRoute path="/gifs/post" component={AddGif}/>
                    <ProtectedRoute path="/articles/post" component={CreateArticle}/>
                    <ProtectedRoute path="/:post/:id" component={SinglePost}/>
                    <Redirect from="*" to="/"/> 
                </Switch>
                <Toast/>  
            </SessionManager>          
        </BrowserRouter>
    )
}