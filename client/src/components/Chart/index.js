import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: props.chartData
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
                <Doughnut
                    data={this.state.chartData}
                    // width={100}
                    // height={500}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: this.props.displayTitle,
                            text: this.props.titleName,
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        );
    };
};

export default Chart;