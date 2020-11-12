import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIE_ID, LOADING } from '../Actions/ActionTypes';

const initialState = {
	text: '',
	moviesList: [],
	loading: false,
	movie: [],
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_MOVIE:
			return {
				...state,
				text: action.payload,
				loading: false,
			};
		case FETCH_MOVIE: {
			return {
				...state,
				moviesList: action.payload,
				loading: false,
			};
		}
		case FETCH_MOVIE_ID:
			return {
				...state,
				movie: action.payload,
				loading: false,
			};
		case LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};

export default searchReducer;
