// import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react'
import Profile from './pages/profile.page'
// import { Appbar, Footer } from './components/share';

// const BackdropPage = React.lazy(() => import('./pages/backdrop.page'))

function App() {
  return (
    <React.Fragment>
      <Profile/>
    </React.Fragment>
  );
}

export default App;