import React from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from './dashboard.page';
import {Paper} from '@mui/material';

function Product() {
    return(
        <Dashboard>
            <Paper 
                elevation={3}
                sx={{
                padding: '20px',
                width: '100%',
                height: '500px',
                borderRadius: '12px'
            }}>
                Product
            </Paper>
        </Dashboard>
    );
}

const mountProduct = (element) => {
    const root = createRoot(element);
    root.render(<Product/>)
}

export {mountProduct, Product};