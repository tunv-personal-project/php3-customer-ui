import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Containers
const Main = React.lazy(() => import('./layout/Main'));

function App() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    // effect
    const cartList = localStorage.getItem('cart');
    if (cartList) {
      setCart(cartList);
    }
    return () => {
      // cleanup
    };
  }, []);

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
