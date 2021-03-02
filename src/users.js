import React from 'react';

const Register = React.lazy(() => import('./views/Auth/Register'));
const Login = React.lazy(() => import('./views/Auth/Login'));

const users = [
  {
    path: '/register',
    exact: true,
    is_navbar: true,
    name: 'Đăng Ký',
    component: Register,
  },
  {
    path: '/login',
    exact: true,
    is_navbar: true,
    name: 'Đăng Nhập',
    component: Login,
  },
];

export default users;
