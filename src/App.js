import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Containers
const Main = React.lazy(() => import('./layout/Main'));

function App() {
  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback={null}>
          <Switch>
            <Route
              path='/'
              name='Trang Chủ'
              render={(props) => <Main props={props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
