import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';
import LoginButton from '../LoginButton';

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    render() {
        return (
            <Fragment>
                <LoginButton
                    onClick={this.props.logout}
                    className='nav-link'
                    href='/login'
                    style={{ backgroundColor: '#f5f5f5' }}>
                    Log Out
                </LoginButton>
            </Fragment>
        )
    };
};

export default connect(null, { logout })(Logout);
