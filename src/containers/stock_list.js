import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectWatchlistItem } from '../actions/index';

import WatchListItem from '../components/stock_list_item';

class WatchList extends Component {

	renderChart(tickerData, index) {
		const closePrice = tickerData.data.map(day => day[11]).reverse();
		return (
			<div 
			onClick={() => this.props.selectWatchlistItem(tickerData.ticker,tickerData.data)}
			key={index} 
			className='col-sm-2'
			>
				<div>{tickerData.ticker}</div>
				<WatchListItem data={closePrice} color='blue'/>
			</div>
		);
	}

	render() {
		if (this.props.watchlist.length == 0){
			return <h3>Watch List</h3>;
		}

		return (
			<div className="row">
				<h3>Watch List</h3>
				<div>
				{this.props.watchlist.map((data,index) => this.renderChart(data,index))}
				</div>
			</div>
			);
	}
}

function mapStateToProps({ watchlist }) {
  return { watchlist };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectWatchlistItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);