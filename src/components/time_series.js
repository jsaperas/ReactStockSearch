import React, { Component } from 'react';

import Plotly from '../../custom-plotly';

export default class CandleStick extends Component {
	
	drawPlot() {
		const chartData = this.props.chartData;
		const layout = this.props.layout;
		Plotly.newPlot('plot',chartData, layout, {displayModeBar: false});
	}

	componentDidMount() {
		this.drawPlot();
	}

	componentDidUpdate() {
		this.drawPlot();
	}

	render() {
		return <div id="plot"></div>;
	}
}