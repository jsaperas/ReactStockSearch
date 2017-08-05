import { combineReducers } from 'redux';
import ReducerStock from './reducer_stock';
import ReducerWatchList from './reducer_stock_list'

const rootReducer = combineReducers({
  stockData: ReducerStock,
  watchlist: ReducerWatchList
});

export default rootReducer;