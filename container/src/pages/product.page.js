import React from 'react';
import {mount} from 'product/ProductApp';
import Button from '@mui/material/Button';

function ProductApp({open, setOpen}){
    const appRef = React.useRef(null);

    React.useEffect(() => {
        if(appRef.current && mount)
        {
            mount(appRef.current, open, setOpen);
        }
    })
    return <div ref={appRef}/>
}

export default function ProductPage(){
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true)
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClick}>open dialog</Button>
            <ProductApp open={open} setOpen={setOpen}/>
        </div>
    );
}