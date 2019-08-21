import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import LoginForm from '../components/auth/LoginForm'


class Login extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <LoginForm />
            </div>
        );
    };
};

export default Login;