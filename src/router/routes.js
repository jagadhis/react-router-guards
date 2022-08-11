import { React, Router, id, login, error } from 'containers';
import { AUTH_ONLY } from 'router/types';

export default () => [
  {
    path: '/',
    exact: true,
    component: Router,
    loading: 'Custom loading for home page...',
    error: 'Custom error for home page',
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/id/:id',
    exact: true,
    component: id,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/React',
    exact: true,
    component: React,
  },
  {
    path: '/login',
    exact: true,
    component: login,
  },
  {
    path: '*',
    component: error,
    ignoreGlobal: true,
  },
];
