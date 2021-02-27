import axios from 'axios';
import URL from '../constants/urls';

export const getAll = () => {
  return axios.get(URL.GET_CATEGORY);
};

export const getDetail = (id) => {
  return axios.get(`${URL.GET_CATEGORY}/${id}`);
};

export default { getAll, getDetail };
