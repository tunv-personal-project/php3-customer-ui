import axios from 'axios';
import URL from '../constants/urls';

export const createOrder = (data) => {
  return axios.post(URL.CREATE_ORDER, data);
};

export default { createOrder };
