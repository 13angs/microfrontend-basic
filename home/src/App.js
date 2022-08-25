// import logo from './logo.svg';
import './App.css';
import './index.css';
import React from 'react';
import ProductSmokingHero from '../mudules/views/ProductSmokingHero';
import ProductCTA from '../mudules/views/ProductCTA';

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
