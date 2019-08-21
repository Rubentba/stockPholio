import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'

export class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }

    render() {
        return (
            <Fragment>
                <Button onClick={this.props.logout} href='#'>Log Out</Button>
            </Fragment>
        )
    }
}

export default connect(null, { logout })(Logout);
