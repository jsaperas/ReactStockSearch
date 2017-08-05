import React, { Component } from 'react';
import { connect } from 'react-redux';

import CandleStick from '../components/time_series';

class StockChart extends Component {

	prepareChartData() {
		
		const x = this.props.stockData.data.map(day => day[0]);
		const open = this.props.stockData.data.map(day => day[8]);
		const high = this.props.stockData.data.map(day => day[9]);
		const low = this.props.stockData.data.map(day => day[10]);
		const close = this.props.stockData.data.map(day => day[11]);
		const trace = {
				x: x,
				close: close,
				decreasing: {line: {color: '#008000'}},
				high: high,
				increasing: {line: {color: '#17BECF'}}, 
				line: {color: 'rgba(31,119,180,1)'},
				low: low,
				open: open,
				type: 'candlestick',
				xaxis: 'x', 
				yaxis: 'y'
			};
		return trace;
	}

	render(){

		if (this.props.stockData.length==0) {
			return null;
		}

		const chartData = [this.prepareChartData()];
		const layout = {
			showlegend: false,
			title: this.props.stockData.ticker,
			titlefont: {
		      size: 36
		    }
		}
		return (
				<CandleStick chartData={chartData} layout={layout}/>
		);
	}

	
}

function mapStateToProps({ stockData }) {
  return { stockData };
}

export default connect(mapStateToProps)(StockChart);