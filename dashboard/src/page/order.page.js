import React from 'react';
import {createRoot} from 'react-dom/client'
import Dashboard from './dashboard.page';
import { Paper } from '@mui/material';

function Order() {
  return (
        <Dashboard>
          <Paper 
            elevation={3}
            sx={{
              padding: '20px',
              width: '100%',
              height: '500px',
              borderRadius: '12px'
          }}>
            order
          </Paper>
        </Dashboard>
  )
}

function mountOrder(element){
  const root = createRoot(element);
  root.render(<Order/>)
}

export {mountOrder, Order};