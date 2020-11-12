import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import SearchMovie from './SearchMovie';
import MovieContainer from './MovieContainer';

export class HomePage extends Component {
	render() {
		const { loading } = this.props;
		return (
			<div>
				<SearchMovie />
				{loading ? <Spinner /> : <MovieContainer />}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state.searchMovieReducer.loading,
});
export default connect(mapStateToProps)(HomePage);
