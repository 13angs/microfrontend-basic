import React from 'react';
import {mount} from 'product/ProductApp';

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

    return (
        <div>
            <ProductApp open={open} setOpen={setOpen}/>
        </div>
    );
}