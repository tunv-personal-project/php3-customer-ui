const BASE_API_URL = 'http://localhost:8000/api-admin';
const BASE_USER_URL = 'http://localhost:8000/api-user';

export default {
  GET_PRODUCT: BASE_API_URL + '/products',
  GET_CATEGORY: BASE_API_URL + '/categories',
  CREATE_ORDER: BASE_USER_URL + '/orders',
  REGISTER: BASE_USER_URL + '/user/register',
  LOGIN: BASE_USER_URL + '/user/login',
  PROFILE: BASE_USER_URL + '/user/profile',
};
