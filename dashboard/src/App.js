import './App.css';
import './index.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const DashboardPage = React.lazy(() => import('./page/bashboard.page'));

function App() {

  return (
    <React.Fragment>
    <BrowserRouter>
        <Switch>
          <Route path={"/bashboard"} component={DashboardPage} />
        </Switch>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;

