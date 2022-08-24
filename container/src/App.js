// import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const CheckoutPage = React.lazy(() => import('./pages/checkout.page'));
const HomePage = React.lazy(() => import('./pages/home.page'));
const ProductPage = React.lazy(() => import('./pages/product.page'));
function App() { 
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path={"/checkouts"} component={CheckoutPage} />
          <Route path={"/home"} component={HomePage} />
          <Route path={"/product"} component={ProductPage} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;