import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/auth/RegisterForm'


class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <RegisterForm />
            </div>
        );
    };
};

export default Signup;