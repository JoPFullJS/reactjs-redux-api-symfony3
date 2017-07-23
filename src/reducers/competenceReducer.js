//Liste des actions
import * from '../constants/actionTypes';

const INITIAL_STATE = {
	competencesList:{competences:[], error:null, loading:false}
};

export default function (state = INITIAL_STATE, actions){
	switch (action.type) {
		case FETCH_COMPETENCES:
			return {...state, competencesList:{competences:[], error:null, loading:true}};
		case FETCH_COMPETENCES_SUCCESS:
			return {...state, competencesList:{competences:action.payload.data, error:null, loading:false}};
		default:
        	return state;
	}
}