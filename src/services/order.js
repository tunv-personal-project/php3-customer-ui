import axios from 'axios';
import URL from '../constants/urls';
import API from '../helper/apiHelper';

export const createOrder = (data) => {
  return API.post(URL.CREATE_ORDER, data);
};

export default { createOrder };
