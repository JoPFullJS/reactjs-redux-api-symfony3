import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import InterventionsList from '../pages/InterventionsList';
import CompetencesList from '../pages/CompetencesList';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={InterventionsList} />
		<Route path="interventions" component={InterventionsList} />
		<Route path="competences" component={CompetencesList} />
	</Route>
);