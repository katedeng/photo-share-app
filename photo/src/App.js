import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    HashRouter,
    Route,
    Routes,
    useNavigate,
} from 'react-router-dom';






import TopBar from './components/TopBar';
import UserDetail from './components/UserDetail';
import UserList from './components/UserList';
import UserPhotos from './components/UserPhotos';
import LoginRegister from './components/LoginRegister';
import AddCommentDialog from './components/AddCommentDialog';
import AddPhotoDialog from './components/AddPhotoDialog';
import Register from './components/Register';
import UserFavoritePhotos from './components/UserFavoritePhotos';


class App extends React.Component {



        render() {
                if (sessionStorage.getItem('isLoggedIn')) {
                    var isLoggedIn = true;
                } else {
                    isLoggedIn = false;
                }
                return ( <
                        HashRouter >
                        <
                        div >

                        <
                        TopBar / >


                        <
                        UserList / >

                        <
                        Routes > {
                            (isLoggedIn) ?
                            <
                            Route path = "/users/:userId"
                            render = {
                                props => < UserDetail {...props }
                                /> } / >
                                :
                                    <
                                    useNavigate path = "/users/:userId"
                                to = "/login-register" / >
                            }

                            {
                                (isLoggedIn) ?
                                <
                                Route path = "/photos/:userId"
                                render = {
                                    props => < UserPhotos {...props }
                                    /> } / >
                                    :
                                        <
                                        useNavigate path = "/photos/:userId"
                                    to = "/login-register" / >
                                } {
                                    (isLoggedIn) ?
                                    <
                                    Route path = "/users"
                                    component = { UserList }
                                    /> : <
                                    useNavigate path = "/users"
                                    to = "/login-register" / >
                                } {
                                    (isLoggedIn) ?
                                    <
                                    Route path = "/addComments/:photoId"
                                    render = {
                                            props => < AddCommentDialog {...props }
                                            /> } / >
                                            :
                                                <
                                                useNavigate path = "/addComments/:photoId"
                                            to = "/login-register" / >
                                        } {
                                            (isLoggedIn) ?
                                            <
                                            Route path = "/addPhotos"
                                            component = { AddPhotoDialog }
                                            /> : <
                                            useNavigate path = "/addPhotos"
                                            to = "/login-register" / >
                                        } {
                                            (isLoggedIn) ?
                                            <
                                            Route path = "/favorites"
                                            component = { UserFavoritePhotos }
                                            /> : <
                                            useNavigate path = "/favorites"
                                            to = "/login-register" / >
                                        } <
                                        Route path = "/login-register"
                                    component = { LoginRegister }
                                    /> <
                                    Route path = "/register"
                                    component = { Register }
                                    />  < /
                                    Routes > < /
                                    div > <
                                        /HashRouter>
                                );
                            }
                        }





                        export default App;