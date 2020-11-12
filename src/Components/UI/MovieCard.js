import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
	render() {
		const { movie } = this.props;
		// console.log(movie);
		return (
			<div className="container">
				<h2>
					{movie.Title} ({movie.Year})
				</h2>
				<div className="card" style={{ width: '400px' }}>
					<img className="card-img-top" src={movie.Poster} alt="Movie Cover" style={{ width: '100%' }} />
					<div className="card-body">
						<h4 className="card-title">{movie.Type}</h4>
						<Link className="btn btn-primary" to={'/title/' + movie.imdbID}>
							Movie Details
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
