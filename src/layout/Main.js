import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import routes from '../routes';

function Main(props) {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Switch>
          {routes.map((route, index) => {
            return (
              route.component && (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                ></Route>
              )
            );
          })}
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

export default Main;
