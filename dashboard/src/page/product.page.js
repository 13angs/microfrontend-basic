import React from 'react';
import { createRoot } from 'react-dom/client';

function Product() {
    return(
        <>Product</>
    );
}

const mountProduct = (element) => {
    const root = createRoot(element);
    root.render(<Product/>)
}

export {mountProduct};