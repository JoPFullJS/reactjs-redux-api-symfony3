import React, { Component } from 'react';
//import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Competences extends Component {
	
	ComponentWillMount() {
		this.props.fetchCompetences();
	}

	renderCompetences(competences) {
		return ((competence) => {
			return ( 
				<li key={competence.id}>
					<p>{competence.titre}</p>
				</li>
			);
		});
	}

	render() {
		const { competences, error, loading } = `${this.props.competencesList}`;

		if(loading) {
			return <div className="interventions">Loading...</div>
		}
		else if(error) {
			return <div className="alert">Error : {error}</div>
		}
		return (
			<div>
				<h2>Divers Competences</h2>
				<ul>
					{this.renderCompetences(competences)}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
	 	competencesList: state.competencesList
	}
}

export default connect(mapStateToProps,actions)(Competences);