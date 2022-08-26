// import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react';
import ProductSmokingHero from './pages/productSmokingHero.page';
import ProductCTA from './pages/productCTA.page';

function App() {
  // console.log(ContainerPage)
  return (
    <React.Fragment>
      <ProductCTA />
      <ProductSmokingHero />
    </React.Fragment>
  );
}

export default App;
