import './App.css';
import './index.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Order } from './page/order.page';

const DashboardPage = React.lazy(() => import('./page/dashboard.page'));

function App() {

  return (
    <React.Fragment>
    <BrowserRouter>
        <Switch>
          <Route exact path={"/dashboard/order"} component={Order} />
          <Route path={"/dashboard"} component={DashboardPage} />
        </Switch>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;

