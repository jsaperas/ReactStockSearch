import { GET_STOCK_HISTORY } from '../actions/index';

export default function(state=[], action) {
	
	switch (action.type){
	case GET_STOCK_HISTORY:

		const data = action.payload.data.dataset_data.data
		const ticker = action.meta
		const stock = {data:data, ticker:ticker}

		return [stock, ...state];
	}

	return state;		
}