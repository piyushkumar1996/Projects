import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
	searchMovieReducer: searchReducer,
});
