import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from '../../Actions/ActionCreator';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

class Movie extends Component {
	componentDidMount() {
		this.props.actionCreator.fetchMovieId(this.props.match.params.id);
		this.props.actionCreator.setLoading();
		console.log(this.props);
	}
	render() {
		const { loading, movie } = this.props;
		// console.log(movie);
		let movieInfo = (
			<div className="container">
				<div className="row">
					<div className="col-md-4 card card-body" width="400px">
						<img src={movie.Poster} className="thumbnail" alt="Poster" /> 	 	
					</div>
					<div className="col-md-8">
						<h1 className="mb-4 text-dark">{movie.Title}</h1>
						<h2 className="mb-4 text-dark">
							IMDb Rating:-
							<strong>
								({movie.imdbRating}*/10) ({movie.imdbVotes} Votes)
							</strong>
						</h2>
						<ul className="list-group">
							<li className="list-group-item">
								<strong>Actors:</strong> {movie.Actors}
							</li>
							<li className="list-group-item">
								<strong>Awards:</strong> {movie.Awards}
							</li>
							<li className="list-group-item">
								<strong>Director:</strong> {movie.Director}
							</li>
							<li className="list-group-item">
								<strong>Genre:</strong> {movie.Genre}
							</li>
							<li className="list-group-item">
								<strong>Language:</strong> {movie.Language}
							</li>
							<li className="list-group-item">
								<strong>Production:</strong> {movie.Production}
							</li>
							{/* <li className="list-group-item">
								<strong>Ratings:</strong> {movie.Ratings[0].Value}
							</li> */}
							<li className="list-group-item">
								<strong>Released:</strong> {movie.Released}
							</li>
							<li className="list-group-item">
								<strong>Runtime:</strong> {movie.Runtime}
							</li>
							<li className="list-group-item">
								<strong>Writer:</strong> {movie.Writer}
							</li>
						</ul>
					</div>
				</div>
				<div className="row card card-body bg-dark my-4 text-light">
					<div className="col-md-12">
						<h3>About</h3>
						{movie.Plot}
						<hr />
						<a
							href={'https://www.imdb.com/' + this.props.location.pathname}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-primary"
							style={{ marginRight: '10px' }}
						>
							View on IMDb
						</a>
						<Link to="/" className="btn btn-primary">
							Go Back To Search
						</Link>
					</div>
				</div>
			</div>
		);

		let MovieDetails = loading ? <Spinner /> : movieInfo;
		return <div>{MovieDetails}</div>;
	}
}

const mapStateToProps = (state) => ({
	loading: state.searchMovieReducer.loading,
	movie: state.searchMovieReducer.movie,
});

const mapDispatchToProps = (dispatch) => {
	return {
		actionCreator: bindActionCreators(actionCreator, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
