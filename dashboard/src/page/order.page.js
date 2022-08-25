import React from 'react';
import {createRoot} from 'react-dom/client'

function Order() {
  return (
    <div>order</div>
  )
}

function mountOrder(element){
  const root = createRoot(element);
  root.render(<Order/>)
}

export {mountOrder, Order};