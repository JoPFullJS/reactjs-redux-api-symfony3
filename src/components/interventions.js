import React, { Component } from 'react';
//import { Link } from 'react-router';

class Interventions extends Component {
	
	ComponentWillMount() {
		this.props.fetchInterventions();
	}

	renderCompetences(interventions) {
		return interventions.map((intervention) => {
			return {
				<div>
					<h3>{intervention.nom}</h3>
					<p>{intervention.description}</p>
				</div>
			};
		});
	}

	render() {
		const { interventions, error, loding } = this.props.interventionsList;

		if(loding) {
			return <div className="interventions">Loading...</div>
		}
		else if(error) {
			return <div className="alert">Error : {error}</div>
		}
		return (
			<div>
				<h2>Divers Competences</h2>
				{this.renderInterventions(interventions)}
			</div>
		);
	}
}

export default Interventions;