import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

class MovieContainer extends Component {
	render() {
		const { moviesList } = this.props;
		// console.log(moviesList);
		let moviesArray = '';
		moviesArray =
			moviesList.Response === 'True'
				? moviesList.Search.map((movie, index) => <MovieCard key={index} movie={movie} />)
				: null;
		return (
			<div className="row">
				<div className="col-sm-6">
					<h5 className="card-title">{moviesArray}</h5>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	moviesList: state.searchMovieReducer.moviesList,
});

export default connect(mapStateToProps)(MovieContainer);
