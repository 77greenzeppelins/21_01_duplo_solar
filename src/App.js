import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.scss';

import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Test from './components/pages/test';

//array of pages
const routes = [
  { id: 1, path: '/', name: 'Home', Destination: Home },
  { id: 2, path: '/test', name: 'Home', Destination: Test },
  { id: 3, path: '/contact', name: 'Home', Destination: Contact },
];

function App() {
  return (
    <>
      <Switch>
        {routes.map(({ id, path, Destination }) => (
          <Route exact id={id} path={path}>
            <Destination />
          </Route>
        ))}
        dest
      </Switch>
    </>
  );
}

export default App;
