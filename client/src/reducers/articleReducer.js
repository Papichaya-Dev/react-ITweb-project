import { GET_ARTICLE_LIKES } from '../actions/types';

const initialState = {
	article_list: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ARTICLE_LIKES:
			return {
				...state,
				article_list: action.payload
			};

		default:
			return state;
	}
}
