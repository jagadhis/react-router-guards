import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loggedin } from '../../utils';
import { STORAGE_KEYS } from '../../utils/constants';
import './page.module.scss';

const Page = ({ children, history }) => {
  const isLoggedin = Loggedin();

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.IS_LOGGED_IN);
    history.push('/login');
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/id/1">1st page</Link>
        <Link to="/id/2">2nd page</Link>
        <Link to="/Router">Non-auth page</Link>
        <Link to="/asdf">404</Link>
        {isLoggedin && <button onClick={logout}>Log out</button>}
      </nav>
      <main>{children}</main>
      <footer />
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
