// import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react';
import AppFooter from '../mudules/views/Appfooter';
import ProductSmokingHero from '../mudules/views/ProductSmokingHero';
import ProductCTA from '../mudules/views/ProductCTA';
import ContainerPage from './components/ContainerPage';

// const ContainerPage = React.lazy(() => import('../pages/container.page'))

function App() {
  // console.log(ContainerPage)
  return (
    <React.Fragment>
      <ContainerPage />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
