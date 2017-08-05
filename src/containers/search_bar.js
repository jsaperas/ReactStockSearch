import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStockHistory } from '../actions/index';


class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { ticker: ''};
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ ticker: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.getStockHistory(this.state.ticker);
		this.setState({ ticker: '' });
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Type stock ticker"
					className="form-control"
					value={this.state.ticker}
					onChange={(event) => this.onInputChange(event) } />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Go!</button>
				</span>
			</form>
		)
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getStockHistory }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)