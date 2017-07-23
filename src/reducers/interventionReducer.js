//Liste des actions
import * from '../constants/actionTypes';

const INITIAL_STATE = {
	interventionsList:{interventions:[], error:null, loading:false}
};

export default function (state = INITIAL_STATE, actions){
	switch (action.type) {
		case FETCH_INTERVENTIONS:
			return {...state, interventionsList:{interventions:[], error:null, loading:true}};
		case FETCH_INTERVENTIONS_SUCCESS:
			return {...state, interventionsList:{interventions:action.payload.data, error:null, loading:false}};
		default:
        	return state;
	}
}