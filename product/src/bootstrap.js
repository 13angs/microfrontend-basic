import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const mount = (element) => {
  const root = createRoot(element);
  root.render(<App/>);
}

if(process.env.NODE_ENV === 'development'){
  const devRoot = document.getElementById('product-id')

  if(devRoot){
    mount(devRoot);
  }
}

export {mount}
