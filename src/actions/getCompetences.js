//Asyncrone request and Promise based HTTP client for the browser
import axios from 'axios';

//Liste des actions
import {
	GET_COMPETENCES_REQUEST,GET_COMPETENCES_SUCCESS,GET_COMPETENCES_FAILURE
} from '../constants/actionTypes';

// Point d'entré de notre API
const ROOT_URI = axios.create({
	baseURL: 'http://127.0.0.1:8000'
})



const getCompetencesRequest = (request) => {
  return {
    type: GET_COMPETENCES_REQUEST,
    request
  }
};

const getCompetencesSuccess = (data) => {

  return {
    type: GET_COMPETENCES_SUCCESS,
    data
  }
};
const getCompetencesFailure = (error) => {

  return {
    type: GET_COMPETENCES_FAILURE,
    error
  }
};


export const getCompetences = () => {

  let request = "/competences";

  return dispatch => {
    dispatch(getCompetencesRequest(request));
    return ROOT_URI.get(request)
      .then(
        res => dispatch(getCompetencesSuccess(res)),
        error => {
          dispatch(getCompetencesFailure(error))
        }
      )
  }
};

export default getCompetences;


