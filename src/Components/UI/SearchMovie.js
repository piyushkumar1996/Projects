import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from '../../Actions/ActionCreator';

export class SearchMovie extends Component {
	handleChange = (event) => {
		this.props.actionCreator.searchMovie(event.target.value);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.actionCreator.fetchMovie(this.props.text);
	};
	render() {
		return (
			<div className="container">
				<form id="searchForm" className="form-group" onSubmit={this.handleSubmit}>
					<div className="row">
						<input
							type="text"
							name="searchText"
							className="form-control"
							placeholder="Search IMDb"
							onChange={this.handleChange}
							style={{ width: '50%' }}
						/>
					</div>
					<button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
						Search
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		text: state.searchMovieReducer.text,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actionCreator: bindActionCreators(actionCreator, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
