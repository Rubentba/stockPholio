import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';

function Footer() {

    return (
        <AppBar position='static' style={{ top: 'auto', bottom: 0, backgroundColor: '#616161' }}>
            <Toolbar>
                <Grid container justify='center'>
                    <Typography style={{ textAlign: 'center' }}>
                        &#169; 2019 Stockpholio
                    </Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
