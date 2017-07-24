import { connect } from 'react-redux';
import * as actions from '../actions/index';

import Competences from '../components/Competences';

function mapStateToProps(state) {
	return{
	 	competencesList: state.competencesList
	}
}

export default connect(mapStateToProps,actions)(Competences);