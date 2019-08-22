import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class AreaChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            areaChartData: props.areaChartData
        }
    };

    static defaultProps = {
        titleName: '',
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'right'
    };

    render() {
        return (
            <div className='chart'>
                <Line
                    data={this.state.areaChartData}
                    // width={100}
                    // height={500}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }]
                        },
                        title: {
                            display: this.props.displayTitle,
                            text: this.props.titleName,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }
                    }
                />
            </div>
        );
    };
};

export default AreaChart;