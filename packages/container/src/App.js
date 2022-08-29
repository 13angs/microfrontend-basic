// import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Appbars = React.lazy(() => import('@mfb/common/appbar/appbar'));
const CheckoutPage = React.lazy(() => import('./pages/checkout.page'));
const HomePage = React.lazy(() => import('./pages/home.page'));
const ProductPage = React.lazy(() => import('./pages/product.page'));
const DashboardPage = React.lazy(() => import('./pages/dashboard.page'));
const DashboardOrder = React.lazy(()=> import('./pages/dashboard/order.dashboard'));
const DashboardProduct = React.lazy(()=> import('./pages/dashboard/product.dashboard'));
const ProfileSettingPage = React.lazy(() => import('./pages/profile/profileSetting.page'))
const ProfilePage = React.lazy(() => import('./pages/profile.page'))
// const BackdropPage = React.lazy(() => import('./pages/backdrop.page'))

function App() {
  // const host = process.env.HOME_HOST;
  // console.log(host);
  return (
    <React.Fragment>
      <Router>
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
            <Route exact path={"/profile/setting"} component={ProfileSettingPage} />
            <Route path={"/profile"} component={ProfilePage} />
            <Route path={"/"} component={HomePage} />
          </Switch>
        </React.Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;