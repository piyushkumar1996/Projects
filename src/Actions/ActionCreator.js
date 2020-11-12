import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIE_ID, LOADING } from './ActionTypes';

export const searchMovie = (text) => (dispatch) => {
	dispatch({
		type: SEARCH_MOVIE,
		payload: text,
	});
	console.log(text);
};

export const fetchMovie = (text) => (dispatch) => {
	fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=273e79dc&s=${text}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			dispatch({
				type: FETCH_MOVIE,
				payload: data,
			});
			console.log(data);
		});
};

export const fetchMovieId = (id) => (dispatch) => {
	fetch(`http://www.omdbapi.com/?apikey=273e79dc&i=${id}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			dispatch({
				type: FETCH_MOVIE_ID,
				payload: data,
			});
			console.log(data);
		})
		.catch((err) => console.log(err));
};

export const setLoading = () => {
	return {
		type: LOADING,
	};
};
