import { combineReducers } from 'redux';

import interventionReducer from './intervention_reducer';
import competenceReducer from './competence_reducer';

//import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
	intervention:interventionReducer,
	competence:competenceReducer
});

export default rootReducer;