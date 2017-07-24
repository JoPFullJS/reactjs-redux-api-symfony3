import { connect } from 'react-redux';
import * as actions from '../actions/index';

import Interventions from '../components/Interventions';

function mapStateToProps(state) {
	return{
	 	interventionsList: state.interventionsList
	}
}

export default connect(mapStateToProps,actions)(Interventions);