import axios from 'axios';

const API_KEY='GET_YOUR_OWN_KEY';
const ROOT_URL='https://www.quandl.com/api/v3/datasets/WIKI/'

export const GET_STOCK_HISTORY = 'GET_STOCK_HISTORY';
export const SELECT_WATCHLIST_ITEM = 'SELECT_WATCHLIST_ITEM';

export function getStockHistory(ticker) {

	const startDate = '2017-02-01'

	const url = `${ROOT_URL}/${ticker}/data.json?start_date=${startDate}&api_key=${API_KEY}`;
	const request = axios.get(url);

	return {
		type: GET_STOCK_HISTORY,
		payload: request, 
		meta: ticker
	};
}

export function selectWatchlistItem(ticker, data){

	return {
		type: SELECT_WATCHLIST_ITEM,
		payload: {data:data, ticker:ticker}
	};

}