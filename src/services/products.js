import axios from 'axios';
import URL from '../constants/urls';

export const getAll = () => {
  return axios.get(URL.GET_PRODUCT);
};

export const getDetail = (id) => {
  return axios.get(`${URL.GET_PRODUCT}/${id}`);
};

export default { getAll, getDetail };
