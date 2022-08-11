import { AUTH_ONLY } from 'router/types';
import { Loggedin } from 'utils';

const requireLogin = (to, from, next) => {
  if (to.meta[AUTH_ONLY] && !Loggedin()) {
    next.redirect('/login');
  }
  next();
};

export default requireLogin;
