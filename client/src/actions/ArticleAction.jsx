import axios from 'axios';

import { GET_ERRORS, GET_ARTICLE_LIKES } from './types';

//Add Like
export const addLike = (id) => (dispatch) => {
	axios.post(`/api/article/like/${id}`).then((res) => dispatch(getArticle())).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

export const getArticle = () => (dispatch) => {
	axios
		.get('/api/article')
		.then((res) => {
			dispatch({
				type: GET_ARTICLE_LIKES,
				payload: res.data
			});
		})
		.catch((err) =>
			dispatch({
				type: GET_ARTICLE_LIKES,
				payload: null
			})
		);
};
