import React from 'react';
import {mount} from 'product/ProductApp';
import BasicFooter from '@mfb/common/footer/basicFooter';

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
    return (
        <div>
            <ProductApp/>
            <BasicFooter/>
        </div>
    );
}