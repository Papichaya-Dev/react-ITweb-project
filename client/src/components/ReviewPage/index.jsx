import React, { Component } from 'react';
import ReviewOne from './ReviewOne';
import ReviewTwo from './ReviewTwo';
import ReviewThree from './ReviewThree';
import ReviewFour from './ReviewFour';
import ReviewFive from './ReviewFive';
import ReviewSix from './ReviewSix';
import { Switch } from '@material-ui/core';

class index extends React.Component {
	render() {
		switch (this.props.match.params.reviewNum) {
			case 'ReviewOne':
				return <ReviewOne />;
			case 'ReviewTwo':
				return <ReviewTwo />;
			case 'ReviewThree':
				return <ReviewThree />;
			case 'ReviewFour':
				return <ReviewFour />;
			case 'ReviewFive':
				return <ReviewFive />;
			case 'ReviewSix':
				return <ReviewSix />;
			default:
				return <div>Don't have this news</div>;
		}
	}
}

export default index;
