//Liste des actions
import {
	FETCH_INTERVENTIONS,FETCH_INTERVENTIONS_SUCCESS,FETCH_INTERVENTIONS_FAILURE
	} from '../constants/actionTypes';

const INITIAL_STATE = {
	interventionsList: null,
	lastRequest: null
};

export const interventionsReducer = (state = INITIAL_STATE, action) => {

	const {data, type, request, error} = action;

	switch (type) {
		case FETCH_INTERVENTIONS:
			return {
				...state,
				lastRequest: request,
			};
		case FETCH_INTERVENTIONS_SUCCESS:
			return {
				...state,
				interventionsList: data,
			};
		case FETCH_INTERVENTIONS_FAILURE:
			return {
				...state,
				error,
			};
		default:
        	return state;
	}
};

// Get all posts
export default interventionsReducer;