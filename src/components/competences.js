import React, { Component } from 'react';
//import { Link } from 'react-router';

class Competences extends Component {
	
	ComponentWillMount() {
		this.props.fetchCompetences();
	}

	renderCompetences(competences) {
		return competences.map((competence) => {
			return {
				<div>
					<h3>{competence.titre}</h3>
					<p>{competence.description}</p>
				</div>
			};
		});
	}

	render() {
		const { competences, error, loding } = this.props.competencesList;

		if(loding) {
			return <div className="interventions">Loading...</div>
		}
		else if(error) {
			return <div className="alert">Error : {error}</div>
		}
		return (
			<div>
				<h2>Divers Competences</h2>
				{this.renderCompetences(competences)}
			</div>
		);
	}
}

export default Competences;