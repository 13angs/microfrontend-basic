import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const mount = (element, open, setOpen) => {
  const root = createRoot(element);
  root.render(<App open={open} setOpen={setOpen}/>);
}

if(process.env.NODE_ENV === 'development'){
  const devRoot = document.getElementById('bashboard-id')

  if(devRoot){
    mount(devRoot);
  }
}

export {mount}
