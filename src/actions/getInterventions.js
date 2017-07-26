//Asyncrone request and Promise based HTTP client for the browser
import axios from 'axios';

//Liste des actions
import {
	GET_INTERVENTIONS_REQUEST,GET_INTERVENTIONS_SUCCESS,GET_INTERVENTIONS_FAILURE,
	GET_COMPETENCES_REQUEST,GET_COMPETENCES_SUCCESS,GET_COMPETENCES_FAILURE
} from '../constants/actionTypes';

// Point d'entré de notre API
const ROOT_URI = axios.create({
	baseURL: 'http://127.0.0.1:8000'
})



const getInterventionsRequest = (request) => {
  return {
    type: GET_INTERVENTIONS_REQUEST,
    request
  }
};

const getInterventionsSuccess = (data) => {

  return {
    type: GET_INTERVENTIONS_SUCCESS,
    data
  }
};
const getInterventionsFailure = (error) => {

  return {
    type: GET_INTERVENTIONS_FAILURE,
    error
  }
};


export const getInterventions = () => {

  let request = "/interventions";

  return dispatch => {
    dispatch(getInterventionsRequest(request));
    return ROOT_URI.get(request)
      .then(
        res => dispatch(getInterventionsSuccess(res)),
        error => {
          dispatch(getInterventionsFailure(error))
        }
      )
  }
};

export default getInterventions;


