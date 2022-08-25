// import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Appbars = React.lazy(() => import('@mfb/common/appbar/appbar'));
const CheckoutPage = React.lazy(() => import('./pages/checkout.page'));
const HomePage = React.lazy(() => import('./pages/home.page'));
const ProductPage = React.lazy(() => import('./pages/product.page'));

// const BackdropPage = React.lazy(() => import('./pages/backdrop.page'))

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Appbars />
        <React.Suspense fallback={
          <Box sx={{ width: '100%', height: '100%' }}>
            <LinearProgress />
          </Box>}>
          <Switch>
            <Route path={"/checkouts"} component={CheckoutPage} />
            <Route path={"/home"} component={HomePage} />
            <Route path={"/product"} component={ProductPage} />
            <Route path={"/"} component={HomePage} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;