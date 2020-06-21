import React, { Component } from 'react';
import './style.scss';
import Popup from './popup';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = styled(SearchIcon)`margin-top: -5px;
margin-left:-35px;`;

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: [],
			isError: false,
			foods: [],
			foundFoods: [],
			showResult: false
		};
	}

	async fetchData() {
		const foods = await fetch('/resources/food.json').catch((err) => this.setError('Cannot Fetch Food Data!'));
		this.setState({ foods: (await foods.json()).foods });
	}

	componentDidMount() {
		this.fetchData();
	}

	setError(msg) {
		this.setState((prevState) => ({ errors: [ ...prevState.errors, msg ] }));
	}

	clearAllErrors() {
		this.setState({ errors: [] });
	}

	async searchFood(keyword) {
		const { foods } = this.state;
		// keyword = RegExp.escape(keyword.toLowerCase());
		function Regexp(string) {
			return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		}
		const pattern = `[A-Za-z.\s]*${keyword}[A-Za-z.\s]*`;
		const matchRegex = new RegExp(pattern);
		const foundFoods = foods.filter((item, idx) => {
			console.log('Match: ', matchRegex, pattern, item.name);
			return matchRegex.test(item.name.toLowerCase());
		});
		console.log('Found Foods: ', foundFoods);
		this.setState({ foundFoods });
	}

	onInputChange(e) {
		const keyword = e.target.value;
		this.searchFood(keyword);
	}

	onInput(e) {
		if (e.target.value !== '') this.showPopup();
		else this.hidePopup();
	}

	showPopup() {
		this.setState({ showResult: true });
	}

	hidePopup() {
		this.setState({ showResult: false });
	}

	render() {
		const { foundFoods, showResult } = this.state;
		return (
			<div className="search">
				<div className="search-container">
					<div className="content">
						<input
							type="text"
							placeholder="Search here"
							onChange={this.onInputChange.bind(this)}
							onInput={this.onInput.bind(this)}
						/>
						<SearchInput />
						<Popup isOpen={showResult} items={foundFoods} />
					</div>
				</div>
			</div>
		);
	}
}
export default Search;
