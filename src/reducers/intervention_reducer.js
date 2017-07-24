//Liste des actions
import {
	FETCH_INTERVENTIONS,FETCH_INTERVENTIONS_SUCCESS,FETCH_INTERVENTIONS_FAILURE,
	FETCH_COMPETENCES,FETCH_COMPETENCES_SUCCESS,FETCH_COMPETENCES_FAILURE
	} from '../constants/actionTypes';

const INITIAL_STATE = {
	interventionsList:{interventions:[], error:null, loading:false}
};

export default function (state = INITIAL_STATE, action){
	switch (action.type) {
		case FETCH_INTERVENTIONS:
			return {...state.interventionsList, interventionsList:{interventions:[], error:null, loading:true}};
		case FETCH_INTERVENTIONS_SUCCESS:
			return {...state.interventionsList, interventionsList:{interventions:action.payload.data, error:null, loading:false}};
		default:
        	return state;
	}
};

// Get all posts
export const getInterventions = state => state.interventions.interventionsList;