import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './styles/App.scss';

import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Test from './components/pages/test';

//array of pages
const routes = [
  { id: 1, path: '/', name: 'Home', Destination: Home },
  { id: 2, path: '/test', name: 'Home', Destination: Test },
  { id: 3, path: '/contact', name: 'Contact', Destination: Contact },
];

function App() {
  return (
    <>
      {routes.map(({ id, path, Destination }) => (
        <Route exact key={id} path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1200}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Destination />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  );
}

export default App;
