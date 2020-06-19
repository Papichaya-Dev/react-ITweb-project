import { GET_REVIEW_LIKES } from '../actions/types';

const initialState = {
	review_list: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_REVIEW_LIKES:
			return {
				...state,
				review_list: action.payload
			};

		default:
			return state;
	}
}
