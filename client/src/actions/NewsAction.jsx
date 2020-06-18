import axios from 'axios';

import { GET_ERRORS, GET_NEWS_LIKES } from './types';

//Add Like
export const addLike = (id) => (dispatch) => {
	axios.post(`/api/news/like/${id}`).then((res) => dispatch(getNews())).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

export const getNews = () => (dispatch) => {
	axios
		.get('/api/news')
		.then((res) => {
			dispatch({
				type: GET_NEWS_LIKES,
				payload: res.data
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_NEWS_LIKES,
				payload: null
			})
		);
};
