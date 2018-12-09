import {API_URL} from '../config';
import axios from 'axios';
function getToken (){
  return localStorage.getItem('token')
} 

export const apiGet = (endpoint, headers = {} ) => {
  return axios.get(
    `${API_URL}${endpoint}`,
    {
      headers: Object.assign({}, {'Authorization': getToken()}, headers),
    }
  );
};