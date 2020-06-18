import { GET_NEWS_LIKES } from '../actions/types';

const initialState = {
	news_list: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_NEWS_LIKES:
			return {
				...state,
				news_list: action.payload
			};

		default:
			return state;
	}
}
