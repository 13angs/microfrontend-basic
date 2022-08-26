// import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Appbar, Footer } from './components/share';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Appbars = React.lazy(() => import('./components/appbar/appbar'));
const CheckoutPage = React.lazy(() => import('./pages/checkout.page'));
const HomePage = React.lazy(() => import('./pages/home.page'));
const ProductPage = React.lazy(() => import('./pages/product.page'));
const DashboardPage = React.lazy(() => import('./pages/dashboard.page'));
const DashboardOrder = React.lazy(()=> import('./pages/dashboard/order.dashboard'));
const DashboardProduct = React.lazy(()=> import('./pages/dashboard/product.dashboard'));

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
            <Route exact path={"/dashboard/order"} component={DashboardOrder} />
            <Route exact path={"/dashboard/product"} component={DashboardProduct} />
            <Route path={"/dashboard"} component={DashboardPage} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;