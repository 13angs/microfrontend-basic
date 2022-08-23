import React from 'react';
import {mount} from 'product/ProductApp';
import {Appbar, Footer} from '../components/share';

function ProductApp(){
    const appRef = React.useRef(null);

    React.useEffect(() => {
        if(appRef.current && mount)
        {
            mount(appRef.current);
        }
    })
    return <div ref={appRef}/>
}

export default function ProductApp(){
    return (
        <div>
            <Appbar/>
            <ProductApp/>
            <Footer/>
        </div>
    );
}