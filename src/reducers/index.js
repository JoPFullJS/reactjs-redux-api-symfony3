import { combineReducers } from 'redux';

import interventionReducer from './interventionReducer';
import competencesReducer from './competenceReducer';

//import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({
	intervention:interventionReducer,
	competence:competencesReducer
});

export default rootReducer;