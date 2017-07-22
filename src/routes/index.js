import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './component/App';
import Interventions from './component/interventions';
import Competences from './component/competences';

export default (
	<Route path="/" component={App}>
		<IndexRoute componet={Interventions} />
		<Route path="interventions" component={Interventions} />
		<Route path="competences" componente={Competences} />
	</Route>
);