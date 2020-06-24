import React, { Component } from 'react';
import ArticleOne from './ArticleOne';
import ArticleTwo from './ArticleTwo';
import ArticleThree from './ArticleThree';
import Dashboard from '../dashboard/Dashboard';

class index extends React.Component {
	render() {
		switch (this.props.match.params.articleNum) {
			case 'ArticleOne':
				return <ArticleOne />;
			case 'ArticleTwo':
				return <ArticleTwo />;
			case 'ArticleThree':
				return <ArticleThree />;
			default:
				return <Dashboard />;
		}
	}
}

export default index;
