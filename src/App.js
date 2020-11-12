import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/UI/HomePage';
import Movie from './Components/UI/Movie';

class App extends Component {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<NavBar />
					<Route exact path="/" component={HomePage} />
					<Route path="/title/:id" component={Movie} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
