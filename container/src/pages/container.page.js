import React from 'react';
import Typography from '@mui/material/Typography';
import { createRoot } from 'react-dom/client';

function ContainerPage(){
    
    return (
        <div>
            <Typography>Container page</Typography>
            
        </div>
    );
}

const containerMount = (element) => {
    const root = createRoot(element);
    root.render(<ContainerPage/>);
}

export default containerMount;