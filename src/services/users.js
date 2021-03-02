import axios from 'axios';
import URL from '../constants/urls';
import API from '../helper/apiHelper';

export const register = (data) => {
  return axios.post(URL.REGISTER, data);
};

export const login = (data) => {
  return axios.post(URL.LOGIN, data);
};

export const profile = () => {
  return API.post(URL.PROFILE);
};

export default { register, login, profile };
