import React from 'react';
import Router from 'router';
import { Page } from '../../components';
import './app.module.scss';

const App = () => (
  <Router>{(content, routeProps) => <Page {...routeProps}>{content}</Page>}</Router>
);

export default App;
