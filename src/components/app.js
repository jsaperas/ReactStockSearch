import React, { Component } from 'react';

import SearchBar from '../containers/search_bar'
import StockChart from '../containers/stock_chart'
import WatchList from '../containers/stock_list'

export default class extends Component {
	render() {

		return (
			<div>
				<h1>Stock Portfolio</h1>
				<SearchBar />
				<WatchList />
				<StockChart />
			</div>
		);
	}
}