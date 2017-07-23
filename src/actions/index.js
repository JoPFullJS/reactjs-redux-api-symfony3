//Asyncrone request and Promise based HTTP client for the browser
import axios from 'axios';

//Liste des actions
import * from '../constants/actionTypes';

// Point d'entré de notre API
const ROOT_URI = 'http://localhost:3000';

/*--------  Listes des action du domaine d'intervention -------------*/

export function fetchInterventions() {
	return dispatch => {
		dispatch({type:FETCH_INTERVENTIONS});
		axios.get(`${ROOT_URI}/interventions`,{
			headers: {accept: 'application/json'}
		})
			.then(response =>{
				dispatch(fetchInterventionsSuccess(response));
			})
			.catch(()=>{
	          	dispatch(fetchCompetencesFailure("Liste des interventions est introuvable !"));
	        });
	}
}

export function fetchInterventionsSuccess(Interventions){
    return {
      type:FETCH_INTERVENTIONS_SUCCESS,
      payload:Interventions
    };
}

export function fetchInterventionsFailure(error){
    return {
      type:FETCH_INTERVENTIONS_FAILURE,
      payload:error
    }
}

/*--------  Listes des action du domaine de competence -------------*/

export function fetchCompetences() {
	return dispatch => {
		dispatch({type:FETCH_COMPETENCES});
		axios.get(`${ROOT_URI}/competences`,{
			headers: {accept: 'application/json'}
		})
			.then(response =>{
				dispatch(fetchCompetencesSuccess(response));
			})
			.catch(()=>{
	          	dispatch(fetchCompetencesFailure("Liste des compétences est introuvable !"));
	        });
	}
}

export function fetchCompetencesSuccess(competences){
    return {
      type:FETCH_COMPETENCES_SUCCESS,
      payload:competences
    };
}

export function fetchCompetencesFailure(error){
    return {
      type:FETCH_COMPETENCES_FAILURE,
      payload:error
    }
}

