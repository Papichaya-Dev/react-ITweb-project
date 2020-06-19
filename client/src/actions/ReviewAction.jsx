import axios from 'axios';

import { GET_ERRORS, GET_REVIEW_LIKES } from './types';

//Add Like
export const addLike = (id) => (dispatch) => {
	axios.post(`/api/review/like/${id}`).then((res) => dispatch(getReview())).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

export const getReview = () => (dispatch) => {
	axios
		.get('/api/review')
		.then((res) => {
			dispatch({
				type: GET_REVIEW_LIKES,
				payload: res.data
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_REVIEW_LIKES,
				payload: null
			})
		);
};
