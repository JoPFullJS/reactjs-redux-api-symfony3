//Liste des actions
import {
	FETCH_COMPETENCES,FETCH_COMPETENCES_SUCCESS,FETCH_COMPETENCES_FAILURE
	} from '../constants/actionTypes';

const INITIAL_STATE = {
	competencesList: null,
	lastRequest: null
};

export const competencesReducer = (state = INITIAL_STATE, action) => {

	const {data, type, request, error} = action;
	
	switch (type) {
		case FETCH_COMPETENCES:
			return {
				...state,
				lastRequest: request,
			};
		case FETCH_COMPETENCES_SUCCESS:
			return {
				...state,
				competencesList: data,
			};
		case FETCH_COMPETENCES_FAILURE:
			return {
				...state,
				error,
			};
		default:
        	return state;
	}
};

// Get all posts
export default competencesReducer;