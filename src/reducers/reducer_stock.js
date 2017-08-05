import { GET_STOCK_HISTORY } from '../actions/index';
import { SELECT_WATCHLIST_ITEM } from '../actions/index';

export default function(state=[], action) {
	switch (action.type){
		case GET_STOCK_HISTORY:
			var data = action.payload.data.dataset_data.data;
			var ticker = action.meta;
			
			return {data:data, ticker:ticker};

		case SELECT_WATCHLIST_ITEM:
			var data = action.payload.data;
			var ticker = action.payload.ticker;
			
			return {data:data, ticker:ticker};
	}
	return state;
}