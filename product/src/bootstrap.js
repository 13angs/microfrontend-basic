import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const mount = (element, value) => {
  const root = createRoot(element);
  console.log(element)
  root.render(<App value={value}/>);
}

if(process.env.NODE_ENV === 'development'){
  const devRoot = document.getElementById('product-id')

  if(devRoot){
    mount(devRoot);
  }
}

export {mount}
