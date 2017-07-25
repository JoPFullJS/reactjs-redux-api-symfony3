import { combineReducers } from 'redux';

import interventionReducer from './intervention_reducer';
import competencesReducer from './competence_reducer';

//import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
	intervention:interventionReducer,
	competence:competenceReducer
});

export default rootReducer;