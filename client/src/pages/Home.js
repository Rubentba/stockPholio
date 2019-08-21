import React, { Component } from 'react';
import Mparallax from '../components/Parallax';
import { CardContent, Typography, Card, Grid } from '@material-ui/core';
import { TrendingUpRounded, PieChartRounded, DoneAllRounded } from '@material-ui/icons';

class Home extends Component {
    render() {
        return (
            <div>
                <Mparallax />
                <div style={{ background: '#f5f5f5' }}>
                    <div style={{ width: '100%' }}>
                        <Typography style={{ textAlign: 'center', fontSize: '40px', paddingTop: '20px', marginBottom: 20 }}>
                            Stop Using Spreadsheets
                        </Typography>
                        <Typography style={{ textAlign: 'center', fontSize: '20px' }}>
                            Keeping track of your investments shouldn't be a hassle. Spreedsheets are a thing of the past. Welcome Stockpholio, the new, easy way to keep track of your portfolio.
                        </Typography>
                    </div>
                    <div style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Card style={{ height: '250px', marginBottom: '40px' }} >
                                    <CardContent>
                                        <Grid container justify='center'>
                                            <PieChartRounded style={{ height: 60, width: 60, marginBottom: 20 }} />
                                        </Grid>
                                        <Typography variant='h1' style={{ fontSize: '24px', textAlign: 'center', marginBottom: 10 }}>
                                            Create Pies
                                        </Typography>
                                        <Typography style={{ fontSize: '20px', textAlign: 'center' }}>
                                            Create Pies for superior stock allocation between accounts or for personal use.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card style={{ height: '250px' }} >
                                    <CardContent>
                                        <Grid container justify='center'>
                                            <TrendingUpRounded style={{ height: 60, width: 60, marginBottom: 20 }} />
                                        </Grid>
                                        <Typography variant='h1' style={{ fontSize: '24px', textAlign: 'center', marginBottom: 10 }}>
                                            Follow Stocks
                                        </Typography>
                                        <Typography style={{ fontSize: '20px', textAlign: 'center' }}>
                                            Get the data you need when you need it for the stocks you are currently tracking.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card style={{ height: '250px' }} >
                                    <CardContent>
                                        <Grid container justify='center'>
                                            <DoneAllRounded style={{ height: 60, width: 60, marginBottom: 20 }} />
                                        </Grid>
                                        <Typography variant='h1' style={{ fontSize: '24px', textAlign: 'center', marginBottom: 10 }}>
                                            Save Time
                                        </Typography>
                                        <Typography style={{ fontSize: '20px', textAlign: 'center' }}>
                                            Instead of spending hours grueling over a spreadsheet, use Stockpholio to save precious time.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div >
        );
    };
};

export default Home;
