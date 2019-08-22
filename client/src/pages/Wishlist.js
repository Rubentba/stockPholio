import React, { Component } from 'react';
import AreaChart from '../components/AreaChart';
import { CardContent, CardMedia, Card, Grid, List, ListItem, Divider, Typography, Link } from '@material-ui/core';
import { styled } from '@material-ui/styles';
// import APIKey from '../config/keys';

// const monthlyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&interval=5min${APIKey}`;

const Word = styled(Link)({
    color: '#03a9f4'
});

class Wishlist extends Component {
    constructor() {
        super();
        this.state = {
            areaChartData: []
        }
    };

    componentWillMount() {
        this.getChartData()
    };

    getChartData() {
        // AJAX call for APIs will go here
        this.setState({
            chartOneData: {
                labels: ['8/14', '8/15', '8/16', '8/19', '8/20', '8/21', '8/22'],
                datasets: [{
                    label: 'Microsoft',
                    data: [
                        133.9800,
                        133.6800,
                        136.1300,
                        138.4100,
                        137.2600,
                        138.7900,
                        138.6600
                    ],
                    backgroundColor: [
                        '#03a9f4',
                        'rgba(54, 162, 235, 0.2)'
                    ]
                }]
            },
            chartTwoData: {
                labels: ['8/14', '8/15', '8/16', '8/19', '8/20', '8/21', '8/22'],
                datasets: [{
                    label: 'Apple',
                    data: [
                        202.7500,
                        201.7400,
                        206.5000,
                        210.3500,
                        210.3600,
                        212.6400,
                        212.4600
                    ],
                    backgroundColor: [
                        '#03a9f4',
                        'rgba(54, 162, 235, 0.2)'
                    ]
                }]
            },
            chartThreeData: {
                labels: ['8/14', '8/15', '8/16', '8/19', '8/20', '8/21', '8/22'],
                datasets: [{
                    label: 'Tesla',
                    data: [
                        219.6200,
                        215.6400,
                        219.9400,
                        226.8300,
                        225.8600,
                        220.8300,
                        222.8000
                    ],
                    backgroundColor: [
                        '#03a9f4',
                        'rgba(54, 162, 235, 0.2)'
                    ]
                }]
            }
        });
    };

    render() {
        return (
            <div>
                <Grid container justify='space-evenly' style={{ marginTop: 60, marginBottom: 30 }}>
                    <Card style={{ height: '400px', marginBottom: '40px' }} >
                        <CardMedia>
                            <AreaChart areaChartData={this.state.chartOneData} titleName='Microsoft' />
                        </CardMedia>
                        <CardContent>
                            <List>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Symbol:
                                        </Typography>
                                        <Typography>
                                            MSFT
                                         </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Open:
                                        </Typography>
                                        <Typography>
                                            138.6600
                                         </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Price:
                                        </Typography>
                                        <Typography>
                                            137.7800
                                         </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Volume:
                                        </Typography>
                                        <Typography>
                                            15836324
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
                    <Card style={{ height: '400px', marginBottom: '40px' }} >
                        <CardMedia>
                            <AreaChart areaChartData={this.state.chartTwoData} titleName='Apple' />
                        </CardMedia>
                        <CardContent>
                            <List>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Symbol:
                                        </Typography>
                                        <Typography>
                                            AAPL
                                         </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Open:
                                        </Typography>
                                        <Typography>
                                            213.1900
                                         </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Price:
                                        </Typography>
                                        <Typography>
                                            212.4600
                                         </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Volume:
                                        </Typography>
                                        <Typography>
                                            19719256
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
                    <Card style={{ height: '400px', marginBottom: '40px' }} >
                        <CardMedia>
                            <AreaChart areaChartData={this.state.chartThreeData} titleName='Tesla' />
                        </CardMedia>
                        <CardContent>
                            <List>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Symbol:
                                        </Typography>
                                        <Typography>
                                            TSLA
                                         </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Open:
                                        </Typography>
                                        <Typography>
                                            222.8000
                                         </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Price:
                                        </Typography>
                                        <Typography>
                                            222.1500
                                         </Typography>
                                    </Grid>
                                </ListItem>
                                <Divider />
                                <ListItem>
                                    <Grid container justify='space-evenly'>
                                        <Typography>
                                            Volume:
                                        </Typography>
                                        <Typography>
                                            6383029
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
                </Grid>
            </div>
        );
    };
};

export default Wishlist;