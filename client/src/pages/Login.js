import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import LoginForm from '../components/LoginForm'


class Login extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <LoginForm />
            </div>
        )
    };
};

export default Login;