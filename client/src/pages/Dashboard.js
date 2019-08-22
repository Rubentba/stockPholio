import React, { Component } from 'react';
import Chart from '../components/Chart';
import { CardContent, CardMedia, Card, Grid, List, ListItem, Divider, Typography, Link } from '@material-ui/core';
import { styled } from '@material-ui/styles';
// import APIKey from '../config/keys';

// const monthlyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&interval=5min${APIKey}`;

const Word = styled(Link)({
    color: '#03a9f4'
});

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            chartData: []
        }
    };

    componentWillMount() {
        this.getChartData()
    };

    getChartData() {
        // AJAX call for APIs will go here
        this.setState({
            chartOneData: {
                labels: ['Apple', 'Tesla', 'Microsoft'],
                datasets: [{
                    label: 'master',
                    data: [
                        10000,
                        5000,
                        5000
                    ],
                    backgroundColor: [
                        '#03a9f4',
                        'rgba(54, 162, 235, 0.2)'
                    ]
                },
                ]
            },
            chartTwoData: {
                labels: ['Tesla', 'Microsoft'],
                datasets: [{
                    label: 'Investment',
                    data: [
                        5000,
                        5000
                    ],
                    backgroundColor: [
                        '#03a9f4',
                        'rgba(54, 162, 235, 0.2)'
                    ]
                },
                ]
            },
            chartThreeData: {
                labels: ['Apple'],
                datasets: [{
                    label: 'Retirement',
                    data: [
                        10000
                    ],
                    backgroundColor: [
                        '#03a9f4'
                    ]
                },
                ]
            }
        });
    };

    render() {
        return (
            <div>
                <Grid container justify='space-evenly' style={{ marginTop: 60, marginBottom: 30 }}>
                    <Card style={{ height: '350px', marginBottom: '40px' }} >
                        <CardMedia>
                            <Chart chartData={this.state.chartOneData} titleName='Master' />
                        </CardMedia>
                        <CardContent>
                            <List>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            50%
                                        </Typography>
                                        <Typography>
                                            Apple
                                         </Typography>
                                        <Typography>
                                            $10,000
                                        </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            25%
                                        </Typography>
                                        <Typography>
                                            Tesla
                                         </Typography>
                                        <Typography>
                                            $5,000
                                        </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            25%
                                        </Typography>
                                        <Typography>
                                            Microsoft
                                         </Typography>
                                        <Typography>
                                            $5,000
                                        </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                            </List>
                        </CardContent>
                    </Card>
                    <Card style={{ height: '350px', marginBottom: '40px' }} >
                        <CardMedia>
                            <Chart chartData={this.state.chartTwoData} titleName='Investment' />
                        </CardMedia>
                        <CardContent>
                            <List>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            50%
                                        </Typography>
                                        <Typography>
                                            Tesla
                                         </Typography>
                                        <Typography>
                                            $5,000
                                        </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            50%
                                        </Typography>
                                        <Typography>
                                            Microsoft
                                         </Typography>
                                        <Typography>
                                            $5,000
                                        </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                            </List>
                            <Word>
                                Edit...
                            </Word>
                        </CardContent>
                    </Card>
                    <Card style={{ height: '350px', marginBottom: '40px' }} >
                        <CardMedia>
                            <Chart chartData={this.state.chartThreeData} titleName='Retirement' />
                        </CardMedia>
                        <CardContent>
                            <List>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            100%
                                        </Typography>
                                        <Typography>
                                            Apple
                                         </Typography>
                                        <Typography>
                                            $10,000
                                        </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <Divider />
                            </List>
                            <Word>
                                Edit...
                            </Word>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        );
    };
};

export default Dashboard;