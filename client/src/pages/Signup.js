import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import RegisterForm from '../components/RegisterForm'


class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <RegisterForm />
            </div>
        )
    };
};

export default Signup;