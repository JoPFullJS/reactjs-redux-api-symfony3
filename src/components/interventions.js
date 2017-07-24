'use strict';
import React, { Component } from 'react';
//import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';


import {fetchInterventions} from '../actions/index';

import {getInterventions} from '../reducers/intervention_reducer'

class Interventions extends Component {
	
	componentWillMount() {
		this.props.listActions;
	}

	renderInterventions(interventions) {
		interventions.map(interventions => {
			return ( 
				<div  key={interventions.id}>
					<h3>{interventions.nom}</h3>
					<p>{interventions.description}</p>
				</div>
			);
		});
	}

	render() {
		const interventions = this.props.interventionsList;

		return (
			<div>
				<h2>Divers Interventions</h2>
				{this.renderInterventions(interventions)}
			</div>
		);
	};
}

function mapDispatchToProps(dispatch){
  return {
    listActions: bindActionCreators(fetchInterventions, dispatch)
  }
}

function mapStateToProps(state) {
	return{
	 	interventionsList: state.getInterventions
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Interventions);