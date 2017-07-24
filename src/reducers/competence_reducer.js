//Liste des actions
import {
	FETCH_INTERVENTIONS,FETCH_INTERVENTIONS_SUCCESS,FETCH_INTERVENTIONS_FAILURE,
	FETCH_COMPETENCES,FETCH_COMPETENCES_SUCCESS,FETCH_COMPETENCES_FAILURE
	} from '../constants/actionTypes';

const INITIAL_STATE = {
	competencesList:{competences:[], error:null, loading:false}
};

export default function (state = INITIAL_STATE, action){
	switch (action.type) {
		case FETCH_COMPETENCES:
			return {...state, competencesList:{competences:[], error:null, loading:true}};
		case FETCH_COMPETENCES_SUCCESS:
			return {...state, competencesList:{competences:action.payload.data, error:null, loading:false}};
		default:
        	return state;
	}
}